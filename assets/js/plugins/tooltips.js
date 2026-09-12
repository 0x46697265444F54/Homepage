function tooltipsPlugin(hook) {
  hook.doneEach(function() {
    document.querySelectorAll('.sidebar-footer [data-tippy-content]').forEach(it => {
      if (!it._tippy)
        tippy(it, { placement: "top", theme: "firedot" });
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(tooltipsPlugin);
