const MAP_URL = "https://map.firedot.pl/";

function mapPlugin(hook, vm) {
  const cover = [
    '<button class="map-embed-cover" data-modal="modal-map">',
      '<i class="bi bi-map-fill"></i>',
      '<span class="map-embed-label">INTERAKTYWNA MAPA</span>',
      '<span class="map-embed-desc">KLIKNIJ, ABY OTWORZYĆ</span>',
    '</button>'
  ].join('');

  hook.doneEach(function() {
    const modal = document.getElementById('modal-map');
    const frame = modal.querySelector('iframe');
    const open = () => {
      if (!frame.src) {
        frame.onload = () => frame.classList.add('loaded');
        frame.src = MAP_URL;
      }
      // Pinning the page stops touch gestures on the map from reaching it and toggling the mobile browser toolbar.
      document.body.style.top = -window.scrollY + 'px';
      document.documentElement.classList.add('scroll-locked');
    };

    modal.addEventListener('close', () => {
      if (!document.documentElement.classList.contains('scroll-locked')) return;
      const scrollY = -parseInt(document.body.style.top || 0);
      document.documentElement.classList.remove('scroll-locked');
      document.body.style.top = '';
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    });

    document.querySelectorAll('.map-embed').forEach(it => it.innerHTML = cover);
    document.querySelectorAll('[data-modal="modal-map"]').forEach(it => it.addEventListener('click', open));

    if (vm.route.path === '/mapa') {
      open();
      modal.showModal();
      modal.addEventListener('close', () => history.replaceState(null, '', '#/nawigacja'), { once: true });
    }
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(mapPlugin);
