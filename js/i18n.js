(() => {
  'use strict';

  const storageKey = 'punchisoft-lang';
  const defaultLang = 'es';
  const root = document.documentElement;

  const translations = {
    es: {
      // Navegación
      'nav.home': 'Inicio',
      'nav.linux': 'Mundo Linux',
      'nav.projects': 'Proyectos',
      'nav.hydraulics': 'Neumática e Hidráulica',
      'nav.cad': 'CAD & Planos',
      'nav.about': 'Acerca de',
      'nav.donations': 'Donaciones',
      'nav.legal': 'Legal',
      'nav.security': 'Seguridad',

      // Botones y Acciones Comunes
      'btn.read_article': 'Leer artículo',
      'btn.read_post': 'Leer publicación',
      'btn.view_project': 'Ver proyecto',
      'btn.official_repo': 'Repositorio oficial',
      'btn.explore_area': 'Explorar área',
      'btn.view_all_articles': 'Ver todos los artículos',
      'btn.view_all_projects': 'Ver todos los proyectos',
      'btn.contact_linkedin': 'Contactar por LinkedIn',
      'btn.donate': 'Donar',
      'btn.back_blog': 'Volver a Mundo Linux',
      'btn.back_home': 'Volver al inicio',
      'btn.copy': 'Copiar',
      'btn.copied': '¡Copiado!',

      // Footer
      'footer.tagline': 'Industria, Linux, IA y software con propósito.',
      'footer.crafted': 'Hecho con curiosidad y código.',

      // Portada (index.html)
      'hero.eyebrow': 'Linux · IA · Planos · Neumática e Hidráulica',
      'hero.title': 'PunchiSoft',
      'hero.subtitle': 'Mundo Linux, IA, Hidráulica, Neumática y desarrollo de software.',
      'hero.lead': 'Artículos, aprendizajes y proyectos creados para resolver problemas reales desde una mirada práctica de ingeniería y tecnología.',
      'hero.btn_linux': 'Ver Mundo Linux',
      'hero.btn_projects': 'Ver Proyectos',
      'hero.btn_hydraulics': 'Ver Neumática e Hidráulica',
      'hero.btn_cad': 'Ver CAD & Planos',

      'wb.label_blog': 'En este blog',
      'wb.status_practical': 'Contenido práctico',
      'wb.subtitle': 'Linux · IA · Planos · Neumática e Hidráulica',
      'wb.title': 'Tecnología explicada desde la práctica',
      'wb.desc': 'Experiencias, decisiones técnicas y herramientas desarrolladas a partir de necesidades reales.',
      'wb.topics_heading': 'Temas principales',
      'wb.topic_1': 'Linux, IA, Software',
      'wb.topic_2': 'Inventor & AutoCad',
      'wb.topic_3': 'Neumática e Hidráulica',
      'wb.topic_4': 'Proyectos Reales!',
      'wb.focus_heading': 'Enfoque',

      'section.latest_post_eyebrow': 'Última publicación',
      'section.latest_post_title': 'Artículo reciente',
      'section.featured_project_eyebrow': 'Proyecto principal',
      'section.featured_project_title': 'Software destacado',
      'section.categories_eyebrow': 'Categorías',
      'section.categories_title': 'Temas principales',
      'section.categories_lead': 'Software, industria, diseño técnico y tecnología explicados desde una mirada práctica.',

      // Tarjetas de categorías
      'cat.linux_title': 'Linux',
      'cat.linux_desc': 'Sistemas, terminal y automatización.',
      'cat.radio_title': 'Radiocomunicación Forestal',
      'cat.radio_desc': 'Códigos R oficiales, frecuencias y protocolos en Chile.',
      'cat.radio_action': 'Consultar códigos →',
      'cat.ai_title': 'Inteligencia artificial',
      'cat.ai_desc': 'IA aplicada al trabajo técnico.',
      'cat.projects_title': 'Proyectos',
      'cat.projects_desc': 'Herramientas para problemas concretos.',
      'cat.hydraulics_title': 'Neumática e Hidráulica',
      'cat.hydraulics_desc': 'Mantenimiento, diagnóstico y circuitos.',
      'cat.cad_title': 'Inventor & AutoCAD',
      'cat.cad_desc': 'Planos, modelado y documentación técnica.',

      // Accesibilidad
      'aria.lang_switch': 'Cambiar idioma a Inglés'
    },

    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.linux': 'Linux World',
      'nav.projects': 'Projects',
      'nav.hydraulics': 'Pneumatics & Hydraulics',
      'nav.cad': 'CAD & Blueprints',
      'nav.about': 'About',
      'nav.donations': 'Donations',
      'nav.legal': 'Legal',
      'nav.security': 'Security',

      // Common Buttons and Actions
      'btn.read_article': 'Read article',
      'btn.read_post': 'Read post',
      'btn.view_project': 'View project',
      'btn.official_repo': 'Official repository',
      'btn.explore_area': 'Explore area',
      'btn.view_all_articles': 'View all articles',
      'btn.view_all_projects': 'View all projects',
      'btn.contact_linkedin': 'Contact on LinkedIn',
      'btn.donate': 'Donate',
      'btn.back_blog': 'Back to Linux World',
      'btn.back_home': 'Back to home',
      'btn.copy': 'Copy',
      'btn.copied': 'Copied!',

      // Footer
      'footer.tagline': 'Industry, Linux, AI and purpose-built software.',
      'footer.crafted': 'Crafted with curiosity and code.',

      // Home (index.html)
      'hero.eyebrow': 'Linux · AI · Blueprints · Pneumatics & Hydraulics',
      'hero.title': 'PunchiSoft',
      'hero.subtitle': 'Linux World, AI, Hydraulics, Pneumatics and software engineering.',
      'hero.lead': 'Articles, technical insights, and software tools built to solve real-world problems through a hands-on engineering mindset.',
      'hero.btn_linux': 'Explore Linux World',
      'hero.btn_projects': 'View Projects',
      'hero.btn_hydraulics': 'View Pneumatics & Hydraulics',
      'hero.btn_cad': 'View CAD & Blueprints',

      'wb.label_blog': 'On this blog',
      'wb.status_practical': 'Hands-on content',
      'wb.subtitle': 'Linux · AI · Blueprints · Pneumatics & Hydraulics',
      'wb.title': 'Technology driven by field experience',
      'wb.desc': 'Hands-on insights, engineering choices, and tools forged to meet real industrial and software challenges.',
      'wb.topics_heading': 'Core Areas',
      'wb.topic_1': 'Linux, AI, Software',
      'wb.topic_2': 'Inventor & AutoCAD',
      'wb.topic_3': 'Pneumatics & Hydraulics',
      'wb.topic_4': 'Real-world Projects!',
      'wb.focus_heading': 'Focus',

      'section.latest_post_eyebrow': 'Latest Publication',
      'section.latest_post_title': 'Recent Article',
      'section.featured_project_eyebrow': 'Flagship Project',
      'section.featured_project_title': 'Featured Software',
      'section.categories_eyebrow': 'Categories',
      'section.categories_title': 'Core Disciplines',
      'section.categories_lead': 'Software, industrial engineering, technical design, and technology explained from a practical perspective.',

      // Category cards
      'cat.linux_title': 'Linux',
      'cat.linux_desc': 'Systems, command-line, and automation.',
      'cat.radio_title': 'Forestry Radiocommunications',
      'cat.radio_desc': 'Official Chilean R codes, radio frequencies and protocols.',
      'cat.radio_action': 'View codes →',
      'cat.ai_title': 'Artificial Intelligence',
      'cat.ai_desc': 'AI applied to engineering workflows.',
      'cat.projects_title': 'Projects',
      'cat.projects_desc': 'Tools built for specific, tangible challenges.',
      'cat.hydraulics_title': 'Pneumatics & Hydraulics',
      'cat.hydraulics_desc': 'Industrial maintenance, diagnostics, and schematics.',
      'cat.cad_title': 'Inventor & AutoCAD',
      'cat.cad_desc': 'Engineering blueprints, 3D modeling, and documentation.',

      // Accessibility
      'aria.lang_switch': 'Switch language to Spanish'
    }
  };

  const getStoredLang = () => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'es' || stored === 'en') return stored;
    } catch {
      // storage blocked
    }
    return defaultLang;
  };

  const setStoredLang = (lang) => {
    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      // storage blocked
    }
  };

  const translatePage = (lang) => {
    const dict = translations[lang] || translations[defaultLang];
    root.setAttribute('lang', lang);

    // 1. Traducir elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 2. Traducir navegación principal (.nav-links)
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      const links = navLinks.querySelectorAll('a');
      links.forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (a.classList.contains('nav-home') || href.endsWith('index.html') && !href.includes('/') && location.pathname.endsWith('index.html') || href === '../index.html' || href === 'index.html' && a.querySelector('.nav-icon')) {
          const icon = a.querySelector('.nav-icon');
          if (icon) {
            a.childNodes.forEach(node => {
              if (node.nodeType === Node.TEXT_NODE) node.textContent = dict['nav.home'];
            });
          } else if (a.textContent.includes('Inicio') || a.textContent.includes('Home')) {
            a.textContent = dict['nav.home'];
          }
        } else if (href.includes('blog/')) {
          a.textContent = dict['nav.linux'];
        } else if (href.includes('software/')) {
          a.textContent = dict['nav.projects'];
        } else if (href.includes('hidraulica-neumatica/')) {
          a.textContent = dict['nav.hydraulics'];
        } else if (href.includes('inventor-autocad/')) {
          a.textContent = dict['nav.cad'];
        } else if (href.includes('acerca-de/')) {
          a.textContent = dict['nav.about'];
        }
      });
    }

    // 3. Traducir navegación del footer
    const footerNav = document.querySelector('.site-footer nav');
    if (footerNav) {
      footerNav.querySelectorAll('a').forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (href.includes('blog/')) a.textContent = dict['nav.linux'];
        else if (href.includes('software/')) a.textContent = dict['nav.projects'];
        else if (href.includes('hidraulica-neumatica/')) a.textContent = dict['nav.hydraulics'];
        else if (href.includes('inventor-autocad/')) a.textContent = dict['nav.cad'];
        else if (href.includes('acerca-de/')) a.textContent = dict['nav.about'];
        else if (href.includes('donaciones/')) a.textContent = dict['nav.donations'];
        else if (href.includes('legal/')) a.textContent = dict['nav.legal'];
        else if (href.includes('seguridad/')) a.textContent = dict['nav.security'];
      });
    }

    // 4. Traducir textos del footer
    const footerTagline = document.querySelector('.footer-content > div > p');
    if (footerTagline) footerTagline.textContent = dict['footer.tagline'];
    const footerBottomCrafted = document.querySelector('.footer-bottom > span:last-child');
    if (footerBottomCrafted) footerBottomCrafted.textContent = dict['footer.crafted'];

    // 5. Actualizar el estado visual del selector
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      const optEs = toggle.querySelector('[data-lang-opt="es"]');
      const optEn = toggle.querySelector('[data-lang-opt="en"]');
      if (optEs) optEs.classList.toggle('active', lang === 'es');
      if (optEn) optEn.classList.toggle('active', lang === 'en');
      toggle.setAttribute('aria-label', dict['aria.lang_switch']);
      toggle.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }

    // 6. Notificar a observadores personalizados
    document.dispatchEvent(new CustomEvent('punchisoft-langchange', { detail: { lang } }));
  };

  const buildLangToggle = () => {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('[data-lang-toggle]')) return;

    const toggle = document.createElement('button');
    toggle.className = 'lang-toggle';
    toggle.type = 'button';
    toggle.dataset.langToggle = '';
    toggle.setAttribute('aria-label', 'Cambiar idioma');

    const optEs = document.createElement('span');
    optEs.className = 'lang-toggle-opt active';
    optEs.dataset.langOpt = 'es';
    optEs.textContent = 'ES';

    const div = document.createElement('span');
    div.className = 'lang-divider';
    div.textContent = '/';
    div.setAttribute('aria-hidden', 'true');

    const optEn = document.createElement('span');
    optEn.className = 'lang-toggle-opt';
    optEn.dataset.langOpt = 'en';
    optEn.textContent = 'EN';

    toggle.append(optEs, div, optEn);

    toggle.addEventListener('click', () => {
      const current = root.getAttribute('lang') || getStoredLang();
      const nextLang = current === 'es' ? 'en' : 'es';
      setStoredLang(nextLang);
      translatePage(nextLang);
    });

    // Insertar justo antes del theme-toggle (o al final de nav)
    const themeToggle = nav.querySelector('[data-theme-toggle]');
    if (themeToggle) {
      nav.insertBefore(toggle, themeToggle);
    } else {
      nav.append(toggle);
    }

    translatePage(getStoredLang());
  };

  // Exponer API global ligera
  window.PunchiI18n = {
    getLanguage: getStoredLang,
    setLanguage: (lang) => {
      setStoredLang(lang);
      translatePage(lang);
    },
    t: (key) => {
      const lang = getStoredLang();
      return (translations[lang] && translations[lang][key]) || translations.es[key] || key;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLangToggle);
  } else {
    buildLangToggle();
  }
})();
