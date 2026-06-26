(() => {
  'use strict';

  const storageKey = 'punchisoft-theme';
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const paypalDonateUrl = 'https://www.paypal.com/donate/?hosted_button_id=HXFSZU4K8C38W';

  const getSiteRoot = () => {
    const script = document.querySelector('script[src$="js/theme.js"]');
    if (!script) return '';
    return script.getAttribute('src').replace(/js\/theme\.js(?:\?.*)?$/, '');
  };

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

  const buildDonationLinks = () => {
    const base = getSiteRoot();
    const donationHref = `${base}donaciones/index.html`;
    const navLinks = document.querySelector('.nav-links');
    const footerNav = document.querySelector('.footer-content nav');
    const donationNav = navLinks ? navLinks.querySelector('[data-donation-nav]') : null;

    if (donationNav) {
      donationNav.remove();
    }

    if (footerNav && !footerNav.querySelector('[data-donation-footer]')) {
      const link = document.createElement('a');
      link.href = donationHref;
      link.dataset.donationFooter = '';
      link.textContent = 'Donaciones';
      footerNav.insertBefore(link, footerNav.querySelector('a[href*="legal"]') || null);
    }
  };

  const buildDonationWidget = () => {
    if (document.querySelector('[data-donation-widget]')) return;

    const base = getSiteRoot();
    const wrapper = document.createElement('div');
    wrapper.className = 'donation-widget';
    wrapper.dataset.donationWidget = '';
    wrapper.innerHTML = `
      <button class="donation-float" type="button" aria-expanded="false" aria-controls="donation-panel">
        <span class="donation-float-icon" aria-hidden="true"><img src="${base}icons/donaciones.svg" alt=""></span>
        <span>Donar</span>
      </button>
      <div class="donation-panel" id="donation-panel" role="dialog" aria-modal="false" aria-labelledby="donation-panel-title" hidden>
        <button class="donation-close" type="button" aria-label="Cerrar donaciones">×</button>
        <span class="donation-panel-icon" aria-hidden="true"><img src="${base}icons/donaciones.svg" alt=""></span>
        <p class="eyebrow">Donaciones</p>
        <h2 id="donation-panel-title">Apoya PunchiSoft</h2>
        <p>Si el contenido o los proyectos te han sido útiles, puedes apoyar su continuidad con una donación voluntaria.</p>
        <div class="donation-qr">
          <img src="${base}assets/images/donaciones/paypal-qr.png" alt="Código QR para donar a PunchiSoft mediante PayPal" width="128" height="128" loading="lazy">
          <span><img class="paypal-brand" src="${base}assets/images/donaciones/paypal.svg" alt="PayPal" loading="lazy">Escanea desde el celular</span>
        </div>
        <div class="donation-panel-actions">
          <a class="button button-primary button-paypal" href="${paypalDonateUrl}" target="_blank" rel="noopener noreferrer"><img src="${base}assets/images/donaciones/paypal.svg" alt="PayPal">Donar <span aria-hidden="true">↗</span></a>
          <a class="button button-ghost" href="${base}donaciones/index.html">Ver página</a>
        </div>
      </div>
    `;

    const trigger = wrapper.querySelector('.donation-float');
    const panel = wrapper.querySelector('.donation-panel');
    const close = wrapper.querySelector('.donation-close');

    const setOpen = (isOpen) => {
      trigger.setAttribute('aria-expanded', String(isOpen));
      panel.hidden = !isOpen;
      wrapper.classList.toggle('is-open', isOpen);
    };

    trigger.addEventListener('click', () => setOpen(trigger.getAttribute('aria-expanded') !== 'true'));
    close.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        trigger.focus();
      }
    });

    document.body.append(wrapper);
  };

  const buildSharedUi = () => {
    buildToggle();
    buildDonationLinks();
    buildDonationWidget();
  };

  applyTheme(preferredTheme());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSharedUi);
  } else {
    buildSharedUi();
  }
})();
