function imageLoadersPlugin(hook) {
  hook.afterEach(function(html) {
    return html.replace(
      /(<div class="(?=(?:[^"]*\s)?(?:card|feature-row)(?:\s[^"]*)?")[^"]*">\s*)<img([^>]*)>/g,
      '$1<div class="img-loader-wrap"><img$2><div class="spinner"></div></div>'
    );
  });

  hook.doneEach(function() {
    document.querySelectorAll('.img-loader-wrap').forEach(wrap => {
      const img = wrap.querySelector('img');
      const markLoaded = () => wrap.classList.add('loaded');
      if (img.complete) markLoaded();
      else {
        img.addEventListener('load', markLoaded, { once: true });
        img.addEventListener('error', markLoaded, { once: true });
      }
    });
  });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(imageLoadersPlugin);
