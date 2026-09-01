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
      'btn.back_blog': '← Volver al blog',
      'btn.back_home': 'Ir al inicio',
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
      'btn.back_blog': '← Back to blog',
      'btn.back_home': 'Go to home',
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

  // Traducciones detalladas de artículos técnicos
  const postTranslations = {
    'punchi-dock-plasmoid': {
      es: {
        title: 'Punchi Dock Remastered: lanzador y gestor de tareas nativo para KDE Plasma 6',
        lead: 'Un dock modular de alto rendimiento, lanzador de aplicaciones PunchiMenu, controles multimedia MPRIS y soporte universal multi-distribución para KDE Plasma 6 y Wayland.',
        intro: 'Punchi Dock Remastered es una reescritura modular y nativa del popular plasmoide Punchi Dock. Se ha rediseñado desde cero en C++20 y Qt 6 para integrarse sin costuras en entornos modernos basados en KDE Plasma 6 y Wayland, preparando el camino hacia la versión estable 1.0 con capacidades avanzadas de lanzador, gestión de tareas, popups multimedia y compatibilidad multi-distribución.',
        tipTitle: 'Consejo tras instalar o actualizar',
        tipText: 'Tras una instalación inicial o actualización del paquete, si el dock se visualiza pero no reacciona a los clics de inmediato, reinicia la shell de Plasma ejecutando systemctl --user restart plasma-plasmashell.service o cierra sesión una vez. La configuración de ítems y temas se preserva intacta.',
        tabs: ['Sobre el Proyecto', 'Características', 'Novedades v0.9.7', 'Galería Visual', 'Instalación'],
        status: 'Preparando versión estable 1.0',
        archTitle: 'Arquitectura Nativa y Limpia',
        archText: 'El proyecto combina la agilidad de los componentes declarativos de Qt Quick con la potencia de un módulo nativo en C++20 (Qt 6 y KDE Frameworks 6). Esto permite una gestión inmediata de los procesos del sistema, integración profunda con TaskManager de Plasma y análisis de espectro de audio mediante PipeWire sin sobrecargar el hilo del compositor KWin.',
        pillarsTitle: 'Pilares de la Edición Remastered',
        featuresTitle: 'Capacidades Principales',
        featuresLead: 'Punchi Dock Remastered es una suite completa de control e interacción para tu panel de escritorio.',
        installTitle: 'Guía Rápida de Instalación',
        installLead: 'Comandos recomendados para desplegar el plasmoide nativo según tu distribución Linux.'
      },
      en: {
        title: 'Punchi Dock Remastered: Native Launcher and Task Manager for KDE Plasma 6',
        lead: 'A high-performance modular dock, PunchiMenu application launcher, MPRIS multimedia controls, and universal multi-distribution support for KDE Plasma 6 and Wayland.',
        intro: 'Punchi Dock Remastered is a modular, native rewrite of the popular Punchi Dock plasmoid. Built from scratch in C++20 and Qt 6, it integrates seamlessly into modern desktop environments powered by KDE Plasma 6 and Wayland, paving the path toward stable 1.0 with advanced launcher capabilities, task management, multimedia popups, and multi-distribution support.',
        tipTitle: 'Tip after installing or upgrading',
        tipText: 'After an initial install or package update, if the dock renders but does not immediately respond to clicks, restart the Plasma shell with systemctl --user restart plasma-plasmashell.service or log out once. Item configurations and themes are preserved intact.',
        tabs: ['About Project', 'Features', 'What’s New v0.9.7', 'Visual Gallery', 'Installation'],
        status: 'Preparing stable release 1.0',
        archTitle: 'Clean & Native Architecture',
        archText: 'The project pairs declarative Qt Quick agility with a native C++20 core engine (Qt 6 and KDE Frameworks 6). This delivers instant system process handling, deep Plasma TaskManager integration, and PipeWire audio spectrum visualization without burdening the KWin compositor thread.',
        pillarsTitle: 'Core Pillars of the Remastered Edition',
        featuresTitle: 'Core Capabilities',
        featuresLead: 'Punchi Dock Remastered is a comprehensive control and interaction suite for your desktop panel.',
        installTitle: 'Quick Installation Guide',
        installLead: 'Recommended commands to install and deploy the native plasmoid across Linux distributions.'
      }
    },
    'codigos-r-radiocomunicacion-forestal-chile': {
      es: {
        title: 'Códigos R de Radiocomunicación Forestal en Chile: Tabla Completa y Protocolos de Terreno',
        lead: 'Manual operativo de claves radiales para walkie-talkies y transceptores portátiles VHF/UHF utilizados por brigadas de CONAF, empresas asociadas a CORMA, torres de vigilancia y faenas forestales en Chile.',
        asideLabel: 'Dispositivo de Campo',
        asideTitle: 'El Walkie-Talkie en Operaciones Forestales',
        asideText: 'En la agreste topografía de los valles y cordilleras de Chile, la telefonía móvil suele quedar fuera de servicio. El walkie-talkie portátil VHF/UHF (radiotransceptor handy para brigadistas y operadores de maquinaria) conectado a repetidoras de cumbre constituye el canal vital de comunicación, coordinación de agua, despacho aéreo y evacuación en caso de emergencia.',
        sec1: '1. ¿Por qué se utilizan Códigos R en el sector forestal chileno?',
        sec2: '2. Tabla Completa de Códigos R Forestales',
        sec3: '3. Alfabeto Fonético ICAO / Aeronáutico en Terreno',
        sec4: '4. La Regla 30-30-30 en Frecuencia Radial',
        sec5: '5. Conclusión',
        searchPlaceholder: 'Buscar código (ej. R-24, R-83) o concepto...',
        thCode: 'Código',
        thDesc: 'Significado / Acción Oficial',
        thCat: 'Categoría',
        thExample: 'Fraseología de Terreno',
        thCopy: 'Copiar'
      },
      en: {
        title: 'Forestry Radio R Codes in Chile: Full Table & Field Protocols',
        lead: 'Field operational manual of radio codes for VHF/UHF walkie-talkies and portable handies used by CONAF firefighting crews, CORMA-affiliated forestry companies, lookout towers, and timber operations in Chile.',
        asideLabel: 'Field Device',
        asideTitle: 'The Walkie-Talkie in Forestry Operations',
        asideText: 'Across the rugged terrain of Chilean mountain ranges and valleys, mobile cellular coverage often fails. The portable VHF/UHF walkie-talkie connected to mountain-top repeaters serves as the lifeline for crew coordination, aerial water drops, and emergency evacuations.',
        sec1: '1. Why are R Codes used in Chilean Forestry?',
        sec2: '2. Complete Forestry R Codes Table',
        sec3: '3. ICAO / Aviation Phonetic Alphabet in the Field',
        sec4: '4. The 30-30-30 Meteorological Rule over Radio',
        sec5: '5. Conclusion',
        searchPlaceholder: 'Search code (e.g. R-24, R-83) or concept...',
        thCode: 'Code',
        thDesc: 'Official Meaning / Action',
        thCat: 'Category',
        thExample: 'Field Phraseology',
        thCopy: 'Copy'
      }
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

  // Traduce el contenido específico del artículo actual si coincide
  const translateArticleContent = (lang) => {
    const isEn = lang === 'en';
    const path = window.location.pathname;

    // 1. Elementos comunes en artículos
    const backLink = document.querySelector('.back-link, .article-breadcrumb a');
    if (backLink) {
      backLink.textContent = isEn ? '← Back to blog' : '← Volver al blog';
    }

    const readMeta = document.querySelector('.post-meta time + span');
    if (readMeta && readMeta.textContent.includes('lectura')) {
      readMeta.textContent = readMeta.textContent.replace('min de lectura', isEn ? 'min read' : 'min de lectura');
    } else if (readMeta && isEn && readMeta.textContent.includes('min read')) {
      // already translated
    }

    // 2. Punchi Dock Plasmoid
    if (path.includes('punchi-dock-plasmoid')) {
      const t = postTranslations['punchi-dock-plasmoid'][lang];
      if (t) {
        const h1 = document.querySelector('article h1, .article-header h1');
        if (h1) h1.textContent = t.title;
        const lead = document.querySelector('.article-header .lead');
        if (lead) lead.textContent = t.lead;
        const intro = document.querySelector('.article-intro');
        if (intro) intro.textContent = t.intro;
        const noteTitle = document.querySelector('.article-note span');
        if (noteTitle) noteTitle.textContent = t.tipTitle;
        const noteP = document.querySelector('.article-note p');
        if (noteP) noteP.textContent = t.tipText;

        // Pestañas
        const tabButtons = document.querySelectorAll('.punchi-tab-button');
        if (tabButtons.length === t.tabs.length) {
          tabButtons.forEach((btn, i) => {
            const svg = btn.querySelector('svg');
            btn.textContent = '';
            if (svg) btn.append(svg);
            btn.append(` ${t.tabs[i]}`);
          });
        }

        const badge = document.querySelector('.punchi-badge-status');
        if (badge) {
          const dot = badge.querySelector('i');
          badge.textContent = '';
          if (dot) badge.append(dot);
          badge.append(` ${t.status}`);
        }
      }
    }

    // 3. Códigos R Forestales
    if (path.includes('codigos-r-radiocomunicacion-forestal-chile')) {
      const t = postTranslations['codigos-r-radiocomunicacion-forestal-chile'][lang];
      if (t) {
        const h1 = document.querySelector('article h1, .article-header h1');
        if (h1) h1.textContent = t.title;
        const lead = document.querySelector('.article-header .lead');
        if (lead) lead.textContent = t.lead;

        const asideLabel = document.querySelector('.walkie-talkie-card .eyebrow');
        if (asideLabel) asideLabel.textContent = t.asideLabel;
        const asideTitle = document.querySelector('.walkie-talkie-card h2');
        if (asideTitle) asideTitle.textContent = t.asideTitle;
        const asideP = document.querySelector('.walkie-talkie-card p');
        if (asideP) asideP.textContent = t.asideText;

        const searchInput = document.getElementById('r-search');
        if (searchInput) searchInput.placeholder = t.searchPlaceholder;

        const ths = document.querySelectorAll('#r-table th');
        if (ths.length >= 5) {
          ths[0].textContent = t.thCode;
          ths[1].textContent = t.thDesc;
          ths[2].textContent = t.thCat;
          ths[3].textContent = t.thExample;
          ths[4].textContent = t.thCopy;
        }

        // Filtros
        const filterAll = document.querySelector('[data-filter="all"]');
        const filterComms = document.querySelector('[data-filter="comms"]');
        const filterFire = document.querySelector('[data-filter="fire"]');
        const filterOps = document.querySelector('[data-filter="ops"]');
        const filterEmergency = document.querySelector('[data-filter="emergency"]');
        if (filterAll) filterAll.childNodes[0].textContent = isEn ? 'All (' : 'Todos (';
        if (filterComms) filterComms.textContent = isEn ? 'Comms (R-1/19)' : 'Comunicaciones (R-1/19)';
        if (filterFire) filterFire.textContent = isEn ? 'Firefighting (R-20/39)' : 'Incendios (R-20/39)';
        if (filterOps) filterOps.textContent = isEn ? 'Operations & Logistics' : 'Faenas & Logística';
        if (filterEmergency) filterEmergency.textContent = isEn ? 'Emergencies (R-70/99)' : 'Emergencias (R-70/99)';
      }
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
        if (a.classList.contains('nav-home') || (href.endsWith('index.html') && !href.includes('/') && location.pathname.endsWith('index.html')) || href === '../index.html' || (href === 'index.html' && a.querySelector('.nav-icon'))) {
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

    // 5. Traducir contenido del artículo actual
    translateArticleContent(lang);

    // 6. Actualizar el estado visual del selector
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      const optEs = toggle.querySelector('[data-lang-opt="es"]');
      const optEn = toggle.querySelector('[data-lang-opt="en"]');
      if (optEs) {
        optEs.classList.toggle('active', lang === 'es');
        optEs.style.background = lang === 'es' ? 'var(--accent, #38bdf8)' : 'transparent';
        optEs.style.color = lang === 'es' ? '#ffffff' : 'inherit';
      }
      if (optEn) {
        optEn.classList.toggle('active', lang === 'en');
        optEn.style.background = lang === 'en' ? 'var(--accent, #38bdf8)' : 'transparent';
        optEn.style.color = lang === 'en' ? '#ffffff' : 'inherit';
      }
      toggle.setAttribute('aria-label', dict['aria.lang_switch']);
      toggle.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }

    // 7. Notificar a observadores personalizados
    document.dispatchEvent(new CustomEvent('punchisoft-langchange', { detail: { lang } }));
  };

  const buildLangToggle = () => {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('[data-lang-toggle]')) return;

    const toggle = document.createElement('button');
    toggle.className = 'lang-toggle';
    toggle.type = 'button';
    toggle.dataset.langToggle = '';
    toggle.setAttribute('aria-label', 'Switch language');

    // Estilos inline de alta fidelidad para asegurar renderizado impecable independientemente de caché CSS
    toggle.style.order = '3';
    toggle.style.marginLeft = '14px';
    toggle.style.display = 'inline-flex';
    toggle.style.alignItems = 'center';
    toggle.style.gap = '5px';
    toggle.style.height = '34px';
    toggle.style.padding = '2px 8px';
    toggle.style.borderRadius = '99px';
    toggle.style.border = '1px solid var(--border-light, rgba(88,166,255,0.3))';
    toggle.style.background = 'var(--surface, rgba(16,24,38,0.85))';
    toggle.style.color = 'var(--text, #ffffff)';
    toggle.style.cursor = 'pointer';
    toggle.style.font = '700 0.74rem ui-monospace, monospace';
    toggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.18)';
    toggle.style.userSelect = 'none';
    toggle.style.backdropFilter = 'blur(12px)';
    toggle.style.transition = 'all 0.2s ease';

    toggle.innerHTML = `
      <span style="font-size:0.9rem; margin-right:2px;" aria-hidden="true">🌐</span>
      <span class="lang-toggle-opt active" data-lang-opt="es" style="padding:2px 6px; border-radius:4px; transition:all .2s;">ES</span>
      <span class="lang-divider" style="opacity:0.35; font-size:0.72rem;" aria-hidden="true">/</span>
      <span class="lang-toggle-opt" data-lang-opt="en" style="padding:2px 6px; border-radius:4px; transition:all .2s;">EN</span>
    `;

    toggle.addEventListener('click', () => {
      const current = root.getAttribute('lang') || getStoredLang();
      const nextLang = current === 'es' ? 'en' : 'es';
      setStoredLang(nextLang);
      translatePage(nextLang);
    });

    // Ubicarlo ordenadamente: antes de theme-toggle o menu-toggle
    const themeToggle = nav.querySelector('[data-theme-toggle]');
    const menuToggle = nav.querySelector('.menu-toggle');
    if (themeToggle) {
      nav.insertBefore(toggle, themeToggle);
    } else if (menuToggle) {
      nav.insertBefore(toggle, menuToggle);
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
