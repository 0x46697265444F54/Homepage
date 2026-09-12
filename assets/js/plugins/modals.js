function modalsPlugin(hook) {
  hook.doneEach(function() {
    // Handlers are assigned rather than added, since the sidebar is rebuilt on every render.
    document.querySelectorAll('[data-modal]').forEach(it => {
      it.onclick = () => document.getElementById(it.dataset.modal).showModal();
    });
    document.querySelectorAll('dialog.modal').forEach(it => {
      // Docsify titles every link it renders, which duplicates the visible text as a native tooltip.
      it.querySelectorAll('a[title]').forEach(link => link.removeAttribute('title'));
      it.querySelector('.modal-close').onclick = () => it.close();
      // A click landing on the dialog itself rather than its content is a backdrop click.
      it.onclick = event => {
        if (event.target === it) it.close();
      };
      // Closing hands focus back to the trigger, which would re-show its tooltip.
      it.onclose = () => {
        document.querySelector('[data-modal="' + it.id + '"]')._tippy?.hide();
      };
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(modalsPlugin);
