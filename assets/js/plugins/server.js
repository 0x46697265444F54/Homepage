const SERVER = {
  address: "firedot.pl",
  version: "26.2"
};

function copyText(text) {
  const request = navigator.clipboard?.writeText?.(text) ?? Promise.reject();
  return request.catch(() => {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    return copied ? Promise.resolve() : Promise.reject();
  });
}

function serverCardsPlugin(hook) {
  const card = [
    '<button class="server-chip" aria-label="Skopiuj">',
      SERVER.address,
      '<i class="bi bi-copy"></i>',
      '<i class="bi bi-check-lg"></i>',
    '</button>',
    '<span class="server-meta">',
      '<span class="server-meta-key">Wersja</span>',
      '<span class="server-meta-value">' + SERVER.version + '</span>',
    '</span>'
  ].join('');

  hook.doneEach(function() {
    document.querySelectorAll('.server-card').forEach(it => {
      it.innerHTML = card;
      const chip = it.querySelector('.server-chip');
      chip.onclick = () => copyText(SERVER.address).then(() => {
        chip.classList.add('copied');
        clearTimeout(chip.copyTimeout);
        chip.copyTimeout = setTimeout(() => chip.classList.remove('copied'), 2000);
      }).catch(() => {});
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(serverCardsPlugin);
