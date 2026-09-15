function modalsPlugin(hook) {
  hook.doneEach(function() {
    // Handlers are assigned rather than added, since the sidebar is rebuilt on every render.
    document.querySelectorAll('[data-modal]').forEach(it => {
      it.onclick = () => {
        document.getElementById(it.dataset.modal).showModal();
        it._tippy?.hide();
      };
    });
    document.querySelectorAll('dialog.modal').forEach(it => {
      // Docsify titles every link it renders, which duplicates the visible text as a native tooltip.
      it.querySelectorAll('a[title]').forEach(link => link.removeAttribute('title'));
      const close = it.querySelector('.modal-close');
      if (close) close.onclick = () => it.close();
      // A pointer landing on the dialog itself outside of its box is on the backdrop.
      const onBackdrop = event => {
        const rect = it.getBoundingClientRect();
        return event.target === it && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
      };
      it.onclick = event => {
        if (onBackdrop(event)) it.close();
      };
      it.onpointermove = it.onpointerover = event => {
        it.classList.toggle('backdrop-hover', event.pointerType === 'mouse' && onBackdrop(event));
      };
      it.onpointerleave = () => it.classList.remove('backdrop-hover');
      // Closing hands focus back to the trigger, which would re-show its tooltip.
      it.onclose = () => {
        it.classList.remove('backdrop-hover');
        document.querySelector('[data-modal="' + it.id + '"]')?._tippy?.hide();
      };
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(modalsPlugin);
