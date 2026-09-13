const THEME_KEY = "theme";

function readTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
}

function syncThemeToggle() {
  const label = document.documentElement.dataset.theme === "light" ? "Tryb Ciemny" : "Tryb Jasny";
  document.querySelectorAll(".theme-toggle").forEach(it => {
    it.dataset.tippyContent = label;
    it.ariaLabel = label;
    it._tippy?.setContent(label);
  });
}

applyTheme(readTheme());

document.addEventListener("click", event => {
  if (!event.target.closest(".theme-toggle")) return;
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  syncThemeToggle();
  try { localStorage.setItem(THEME_KEY, next); } catch {}
});
