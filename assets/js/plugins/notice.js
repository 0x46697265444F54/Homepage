const NOTICE = {
  enabled: true,
  id: "26.3-update",
  type: "green",
  icon: "bi-stars",
  text: "Zobacz co się zmieniło w ostatnich aktualizacjach!",
  link: { text: "Szczegóły", href: "/nowosci.md" }
};

function readDismissedNotice() {
  try { return localStorage.getItem("notice"); } catch { return null; }
}

function dismissNotice(id) {
  try { localStorage.setItem("notice", id); } catch {}
}

function noticeHref(href) {
  if (/^(https?:)?\/\//.test(href) || href.startsWith("#")) return href;
  return "#/" + href.replace(/^\/+/, "").replace(/\.md$/, "");
}

function noticePlugin(hook) {
  hook.mounted(function() {
    if (!NOTICE?.enabled || document.querySelector('.notice')) return;
    if (NOTICE.id && readDismissedNotice() === NOTICE.id) return;
    const bar = document.createElement('div');
    bar.className = 'notice ' + (NOTICE.type ?? 'info');
    bar.setAttribute('role', 'status');
    bar.innerHTML = [
      NOTICE.icon ? '<i class="bi ' + NOTICE.icon + '"></i>' : '',
      '<span class="notice-text">' + NOTICE.text + '</span>',
      NOTICE.link ? '<a class="notice-link" href="' + noticeHref(NOTICE.link.href) + '">' + NOTICE.link.text + '</a>' : '',
      NOTICE.id ? '<button class="notice-close" aria-label="Zamknij"><i class="bi bi-x-lg"></i></button>' : ''
    ].join('');
    document.body.prepend(bar);
    document.body.classList.add('has-notice');
    const scrolling = new AbortController();
    const sync = () => document.body.style.setProperty('--notice-offset', Math.max(0, bar.offsetHeight - window.scrollY) + 'px');
    const measure = () => {
      document.body.style.setProperty('--notice-height', bar.offsetHeight + 'px');
      document.body.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + 'px');
      sync();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    observer.observe(document.documentElement);
    window.addEventListener('scroll', sync, { passive: true, signal: scrolling.signal });
    bar.querySelector('.notice-close')?.addEventListener('click', () => {
      dismissNotice(NOTICE.id);
      scrolling.abort();
      bar.remove();
      document.body.classList.remove('has-notice');
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(noticePlugin);
