const SEARCH_LIMIT = 12;
const SEARCH_SNIPPET = 140;

function searchFold(text) {
  let folded = "";
  for (let i = 0; i < text.length; i++) {
    const stripped = text[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    folded += (stripped.length === 1 ? stripped : text[i]).toLowerCase();
  }
  return folded;
}

function searchPlainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/@icon\[[^\]]*\]/g, " ")
    .replace(/@entry\[[^\]]*\]/g, " ")
    .replace(/^@end\s*$/gm, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~#>|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchPath(href) {
  const route = href.replace(/^#/, "").replace(/^\//, "").split("?")[0].replace(/\.md$/, "");
  return "contents/" + (route === "" ? "_home" : route) + ".md";
}

function searchAnchor(heading) {
  const slugify = window.Docsify?.slugify;
  if (!slugify) return null;
  slugify.clear?.();
  return slugify(heading);
}

const SEARCH_CARD_TITLES = [
  /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i,
  /<p class="ec-title">([\s\S]*?)<\/p>/i,
  /<div class="world-name">([\s\S]*?)<\/div>/i,
  /^\s*<p><strong>([\s\S]*?)<\/strong>/i
];

function searchCardTitle(line) {
  const cleaned = line.replace(/<span class="ec-level-badge">[\s\S]*?<\/span>/gi, " ");
  for (const pattern of SEARCH_CARD_TITLES) {
    const match = pattern.exec(cleaned);
    if (match) {
      const title = searchPlainText(match[1]);
      if (title) return title;
    }
  }
  return null;
}

function searchSections(markdown, page) {
  const sections = [];
  let current = { page, heading: null, anchorHeading: null, anchorId: null, lines: [] };
  let sectionHeading = null;
  let sectionId = null;

  for (const line of markdown.split("\n")) {
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      sections.push(current);
      const explicit = /\s*:id=([\w-]+)\s*$/.exec(heading[2]);
      sectionHeading = searchPlainText(explicit ? heading[2].replace(explicit[0], "") : heading[2]);
      sectionId = explicit ? explicit[1] : null;
      current = { page, heading: sectionHeading, anchorHeading: sectionHeading, anchorId: sectionId, lines: [] };
      continue;
    }
    const card = searchCardTitle(line);
    if (card) {
      sections.push(current);
      current = { page, heading: card, anchorHeading: sectionHeading, anchorId: sectionId, lines: [] };
      continue;
    }
    current.lines.push(line);
  }
  sections.push(current);

  return sections
    .map(section => ({
      page: section.page,
      heading: section.heading,
      anchorHeading: section.anchorHeading,
      anchorId: section.anchorId,
      text: searchPlainText(section.lines.join("\n"))
    }))
    .filter(section => section.text || section.heading);
}

async function searchBuildIndex() {
  const pages = [...document.querySelectorAll(".sidebar-nav a[href^='#/']")]
    .map(link => ({ title: link.textContent.trim(), href: link.getAttribute("href") }))
    .filter((page, index, all) => all.findIndex(other => other.href === page.href) === index);

  const sections = await Promise.all(pages.map(async page => {
    try {
      const response = await fetch(searchPath(page.href));
      if (!response.ok) return [];
      return searchSections(await response.text(), page);
    } catch {
      return [];
    }
  }));

  return sections.flat().map(section => ({
    ...section,
    foldedText: searchFold(section.text),
    foldedHeading: searchFold(section.heading ?? ""),
    foldedTitle: searchFold(section.page.title)
  }));
}

function searchRanges(folded, terms) {
  const ranges = [];
  for (const term of terms) {
    let from = folded.indexOf(term);
    while (from !== -1) {
      ranges.push([from, from + term.length]);
      from = folded.indexOf(term, from + term.length);
    }
  }
  return ranges.sort((a, b) => a[0] - b[0]).reduce((merged, range) => {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
    else merged.push(range);
    return merged;
  }, []);
}

function searchHighlight(text, ranges, offset = 0) {
  const escape = value => value.replace(/[&<>]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
  let cursor = 0;
  let html = "";
  for (const [from, to] of ranges) {
    const start = from - offset;
    const end = to - offset;
    if (end <= 0 || start >= text.length) continue;
    html += escape(text.slice(cursor, Math.max(start, 0)));
    html += "<mark>" + escape(text.slice(Math.max(start, 0), end)) + "</mark>";
    cursor = end;
  }
  return html + escape(text.slice(cursor));
}

function searchMatch(index, query) {
  const terms = searchFold(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return index
    .map(section => {
      const haystack = section.foldedTitle + " " + section.foldedHeading;
      if (!terms.every(term => haystack.includes(term))) return null;

      const score = terms.reduce((total, term) =>
        total + (section.foldedHeading.includes(term) ? 3 : 0)
              + (section.foldedTitle.includes(term) ? 1 : 0), 0);

      const first = terms.map(term => section.foldedText.indexOf(term)).filter(at => at !== -1).sort((a, b) => a - b)[0] ?? 0;
      const from = Math.max(0, first - 40);
      const to = Math.min(section.text.length, from + SEARCH_SNIPPET);

      return {
        section,
        score,
        snippet: (from > 0 ? "…" : "") + section.text.slice(from, to) + (to < section.text.length ? "…" : ""),
        snippetOffset: from - (from > 0 ? 1 : 0),
        headingRanges: searchRanges(section.foldedHeading, terms),
        snippetRanges: searchRanges(section.foldedText, terms)
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, SEARCH_LIMIT);
}

function searchPlugin(hook) {
  hook.mounted(function() {
    if (document.querySelector(".search-trigger")) return;

    const trigger = document.createElement("button");
    trigger.className = "search-trigger";
    trigger.setAttribute("aria-label", "Szukaj");
    trigger.innerHTML = '<i class="bi bi-search"></i><span>Szukaj...</span><kbd>Ctrl F</kbd>';

    const modal = document.createElement("dialog");
    modal.className = "modal search-modal";
    modal.innerHTML = [
      '<div class="search-field">',
        '<i class="bi bi-search"></i>',
        '<input type="search" placeholder="Szukaj..." autocomplete="off" spellcheck="false" aria-label="Szukaj">',
      '</div>',
      '<div class="search-results"></div>'
    ].join("");
    document.body.appendChild(modal);

    const input = modal.querySelector("input");
    const results = modal.querySelector(".search-results");
    let index = null;
    let matches = [];
    let active = 0;

    const render = () => {
      if (!input.value.trim()) {
        results.innerHTML = "";
        return;
      }
      if (!index) {
        results.innerHTML = '<div class="search-empty">Indeksowanie...</div>';
        return;
      }
      matches = searchMatch(index, input.value);
      active = 0;
      if (!matches.length) {
        results.innerHTML = '<div class="search-empty">Brak wyników.</div>';
        return;
      }
      results.innerHTML = matches.map((match, position) => {
        const anchor = match.section.anchorId ?? (match.section.anchorHeading ? searchAnchor(match.section.anchorHeading) : null);
        const href = match.section.page.href + (anchor ? "?id=" + anchor : "");
        const duplicate = match.section.heading && match.section.foldedHeading === match.section.foldedTitle;
        const heading = match.section.heading && !duplicate
          ? '<i class="bi bi-arrow-right search-arrow"></i><span class="search-heading">' + searchHighlight(match.section.heading, match.headingRanges) + "</span>"
          : "";
        return '<a class="search-result' + (position === 0 ? " active" : "") + '" href="' + href + '">' +
          '<span class="search-page">' + match.section.page.title + heading + "</span>" +
          '<span class="search-snippet">' + searchHighlight(match.snippet, match.snippetRanges, match.snippetOffset) + "</span>" +
        "</a>";
      }).join("");
    };

    const highlightActive = () => {
      results.querySelectorAll(".search-result").forEach((result, position) => {
        result.classList.toggle("active", position === active);
        if (position === active) result.scrollIntoView({ block: "nearest" });
      });
    };

    const open = async () => {
      if (modal.open) return;
      modal.showModal();
      input.select();
      if (!index) {
        render();
        index = await searchBuildIndex();
        render();
      }
    };

    trigger.onclick = open;
    input.oninput = render;

    input.onkeydown = event => {
      const results = matches.length;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!results) return;
        active = (active + (event.key === "ArrowDown" ? 1 : results - 1)) % results;
        highlightActive();
      } else if (event.key === "Enter") {
        event.preventDefault();
        modal.querySelectorAll(".search-result")[active]?.click();
      }
    };

    modal.onclick = event => {
      if (event.target === modal) modal.close();
      else if (event.target.closest(".search-result")) modal.close();
    };

    document.addEventListener("keydown", event => {
      if (event.key.toLowerCase() === "f" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        open();
      }
    });

    document.querySelector(".app-name")?.insertAdjacentElement("afterend", trigger);
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(searchPlugin);
