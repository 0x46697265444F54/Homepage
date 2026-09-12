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

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(pageTitlePlugin, pageFooterPlugin);
