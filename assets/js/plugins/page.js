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

function pageTransitionPlugin(hook, vm) {
  const section = () => document.querySelector(".markdown-section");

  hook.beforeEach((markdown, next) => {
    const current = section();
    if (!current?.childElementCount) return next(markdown);
    const target = document.querySelector(`.sidebar-nav a[href="#${vm.route.path}"]`)?.closest("li");
    if (target) {
      document.querySelectorAll(".sidebar-nav li.active").forEach(li => li.classList.remove("active"));
      target.classList.add("active");
    }
    current.classList.add("page-leave");
    setTimeout(() => {
      document.querySelector(".sidebar")?.classList.add("sidebar-settling");
      next(markdown);
    }, 100);
  });

  hook.doneEach(() => {
    const sidebar = document.querySelector(".sidebar");
    requestAnimationFrame(() => requestAnimationFrame(() => sidebar?.classList.remove("sidebar-settling")));

    const current = section();
    current.classList.remove("page-leave", "page-enter");
    void current.offsetWidth;
    current.classList.add("page-enter");
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(pageTitlePlugin, pageFooterPlugin, pageTransitionPlugin);
