const ENTRY_MONTHS = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
];

const ENTRY_RELATIVE_DAYS = new Intl.RelativeTimeFormat("pl", { numeric: "auto" });
const ENTRY_RELATIVE = new Intl.RelativeTimeFormat("pl", { numeric: "always" });

function parseEntryDate(text) {
  const parts = /^\s*(\d{1,2})\s+(\S+)\s+(\d{4})\s*$/.exec(text);
  if (!parts) return null;
  const month = ENTRY_MONTHS.indexOf(parts[2].toLowerCase());
  return month < 0 ? null : new Date(+parts[3], month, +parts[1]);
}

function relativeEntryDate(date) {
  const midnight = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const days = Math.round((midnight(date) - midnight(new Date())) / 86400000);
  const span = Math.abs(days);
  if (span < 7) return ENTRY_RELATIVE_DAYS.format(days, "day");
  if (span < 30) return ENTRY_RELATIVE.format(Math.round(days / 7), "week");
  if (span < 365) return ENTRY_RELATIVE.format(Math.round(days / 30), "month");
  return ENTRY_RELATIVE.format(Math.round(days / 365), "year");
}

function extraMarkdownPlugin(hook, vm) {

  hook.beforeEach(function(markdown) {
    let parsed = markdown.replace(/@icon\[([\w-]+)\]/g, function(match, iconName) {
      return `%%ICON_${iconName}%%`;
    });
    parsed = parsed.replace(/@link\[([^\]]+)\]\(([^)\s]+)\)(?:\{([^}]*)\})?/g, function(match, label, href, attributes) {
      const args = {};
      for (const [, key, quoted, bare] of (attributes ?? '').matchAll(/([\w-]+)=(?:"([^"]*)"|(\S+))/g)) {
        args[key] = quoted ?? bare;
      }
      const external = /^(https?:)?\/\//.test(href);
      const target = external ? ' target="_blank" rel="noopener"' : '';
      const arrow = external ? 'bi-box-arrow-up-right' : 'bi-arrow-right';
      const url = external ? href : '#/' + href.replace(/^#?\//, '');
      const desc = args.desc ? `<span class="link-chip-desc">${args.desc}</span>` : '';
      const size = ['large', 'compact'].includes(args.size) ? ` ${args.size}` : '';
      const accent = /^#[0-9a-f]{3,8}$/i.test(args.color ?? '');
      const style = accent ? ` style="--accent: ${args.color}"` : '';
      return `<a class="link-chip${size}${accent ? ' accent' : ''}" href="${url}"${target}${style}>` +
               (args.icon ? `%%ICON_${args.icon}%%` : '') +
               `<span class="link-chip-text"><span class="link-chip-label">${label}</span>${desc}</span>` +
               `%%ICON_${arrow}%%` +
             `</a>`;
    });
    parsed = parsed.replace(/^@entry\[([^\]]*)\]\s*$/gm, function(match, date) {
      return `<div class="entry"><div class="entry-date" data-date="${date}">${date}</div><div class="entry-content">\n`;
    });
    parsed = parsed.replace(/^@end\s*$/gm, '\n</div></div>');
    return parsed;
  });

  hook.doneEach(function() {
    document.querySelectorAll('.entry-date[data-date]').forEach(function(el) {
      const date = parseEntryDate(el.dataset.date);
      if (!date) return;
      el.textContent = relativeEntryDate(date);
      if (el._tippy) return;
      el.tabIndex = 0;
      tippy(el, {
        content: el.dataset.date,
        placement: "top",
        theme: "firedot",
        trigger: "mouseenter focus click"
      });
    });
  });

  hook.afterEach(function(html) {
    html = html.replace(/%%ICON_(.*?)%%/g, function(match, iconName) {
      if (iconName.includes('-')) {
        const prefix = iconName.split('-')[0];
        return `<i class="${prefix} ${iconName}"></i>`;
      }
      return `<i class="${iconName}"></i>`;
    });
    return html;
  });

}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(extraMarkdownPlugin);