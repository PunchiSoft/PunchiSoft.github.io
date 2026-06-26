(() => {
  'use strict';

  const storageKey = 'punchisoft-theme';
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // La preferencia visual sigue funcionando aunque el navegador bloquee storage.
    }
  };

  const preferredTheme = () => getStoredTheme() === 'dark' ? 'dark' : 'light';

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'light' ? 'light' : 'dark';
    if (themeColor) themeColor.content = theme === 'light' ? '#eef1f5' : '#10141c';

    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;
    const isLight = theme === 'light';
    toggle.setAttribute('aria-label', isLight ? 'Cambiar a fondo oscuro' : 'Cambiar a fondo claro');
    toggle.setAttribute('title', isLight ? 'Fondo oscuro' : 'Fondo claro');
    toggle.setAttribute('aria-pressed', String(isLight));
  };

  const buildToggle = () => {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('[data-theme-toggle]')) return;

    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.type = 'button';
    toggle.dataset.themeToggle = '';
    toggle.innerHTML = '<span class="theme-toggle-track" aria-hidden="true"><span class="theme-toggle-thumb"></span></span>';
    toggle.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
      setStoredTheme(nextTheme);
      applyTheme(nextTheme);
    });

    nav.append(toggle);
    applyTheme(root.dataset.theme || preferredTheme());
  };

  applyTheme(preferredTheme());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToggle);
  } else {
    buildToggle();
  }
})();
