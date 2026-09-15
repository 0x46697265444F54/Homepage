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
    const load = () => {
      if (frame.src) return;
      frame.onload = () => frame.classList.add('loaded');
      frame.src = MAP_URL;
    };

    document.querySelectorAll('.map-embed').forEach(it => it.innerHTML = cover);
    document.querySelectorAll('[data-modal="modal-map"]').forEach(it => it.addEventListener('click', load));

    if (vm.route.path === '/mapa') {
      load();
      modal.showModal();
      modal.addEventListener('close', () => history.replaceState(null, '', '#/nawigacja'), { once: true });
    }
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(mapPlugin);
