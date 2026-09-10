function extraMarkdownPlugin(hook, vm) {

  hook.beforeEach(function(markdown) {
    let parsed = markdown.replace(/@icon\[([\w-]+)\]/g, function(match, iconName) {
      return `%%ICON_${iconName}%%`;
    });
    parsed = parsed.replace(/^@entry\[([^\]]*)\]\s*$/gm, function(match, date) {
      return `<div class="entry"><div class="entry-date">${date}</div><div class="entry-content">\n`;
    });
    parsed = parsed.replace(/^@end\s*$/gm, '\n</div></div>');
    return parsed;
  });

  hook.afterEach(function(html) {
    html = html.replace(/%%ICON_(.*?)%%/g, function(match, iconName) {
      if (iconName.includes('-')) {
        const prefix = iconName.split('-')[0];
        return `<i class="${prefix} ${iconName}"></i>`;
      }
      return `<i class="${iconName}"></i>`;
    });
    return html;
  });

}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(extraMarkdownPlugin);