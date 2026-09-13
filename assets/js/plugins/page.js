function pageTitlePlugin(hook) {
  hook.doneEach(function() {
    if (document.title === window.$docsify.name)
      document.title = "Strona Główna | FireDOT"
    else document.title = document.title.replace(" - " + window.$docsify.name, " | FireDOT");
  });
}

function pageFooterPlugin(hook) {
  const footer = [
    "<hr>",
    "<footer>",
      "<span>FireDOT &copy; 2026</span>",
      "<span>Not affiliated with, or approved by 'Mojang Studios', 'Microsoft', or any other mentioned entities. All trademarks and copyrights are the property of their respective owners.</span>",
    "</footer>"
  ]

  hook.afterEach(html => {
    return html + footer.join("");
  });
}

function pageTransitionPlugin(hook) {
  const section = () => document.querySelector(".markdown-section");

  hook.beforeEach((markdown, next) => {
    const current = section();
    if (!current?.childElementCount) return next(markdown);
    current.classList.add("page-leave");
    setTimeout(() => next(markdown), 100);
  });

  hook.doneEach(() => {
    const current = section();
    current.classList.remove("page-leave", "page-enter");
    void current.offsetWidth;
    current.classList.add("page-enter");
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(pageTitlePlugin, pageFooterPlugin, pageTransitionPlugin);
