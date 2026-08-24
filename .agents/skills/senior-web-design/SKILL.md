---
name: senior-web-design
description: >-
  Guía y estándares de Arquitectura de Diseño Web Senior, UI/UX de alto impacto,
  sistemas de diseño modernos (Design Tokens), micro-interacciones, accesibilidad
  y tableros de gestión empresarial de alta densidad visual.
---

# Senior Web Design & UI/UX Engineering Playbook

Esta skill define los principios, estándares técnicos y patrones de diseño de nivel **Senior / Lead UI/UX** para construir aplicaciones web modernas, rápidas, accesibles y estéticamente sobresalientes.

---

## 1. Fundamentos de Arquitectura Visual (Design Tokens)

Todo diseño senior debe estructurarse mediante variables semánticas en CSS (`:root` y `[data-theme="dark"]`):

```css
:root {
  /* Tipografía */
  --font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Elevación & Sombras de Capa */
  --shadow-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.04);
  --shadow-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 4px 14px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -3px rgba(15, 23, 42, 0.06);
  --shadow-xl: 0 20px 45px -8px rgba(15, 23, 42, 0.18);

  /* Curvaturas de Borde (Border Radius) */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-full: 9999px;

  /* Transiciones Suaves */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 2. Principios de Interfaz de Usuario (UI) de Nivel Senior

1. **Jerarquía Visual Inmediata:**
   * La vista debe guiar la atención del usuario sin esfuerzo: Título de sección -> KPIs clave -> Controles de acción -> Grid de datos.
   * Evitar el ruido visual: uso estratégico del espacio negativo (*whitespace*) para separar contextos funcionales.

2. **Micro-interacciones y Feedback Háptico-Visual:**
   * **Hover con elevación sutil:** `transform: translateY(-2px); box-shadow: var(--shadow-md);`.
   * **Botones activos:** `transform: translateY(0px) scale(0.98);`.
   * **Sistema de Toast / Notificaciones Flotantes:** Notificar al usuario cada acción exitosa (ej: reasignación, guardado, exportación).

3. **Componentes de Tablero y Cuadrillas (Kanban):**
   * Encabezados claros con insignias de dotación (`4 / 4 Completo`).
   * Indicadores de capacidad porcentual (barras de progreso de dotación activa).
   * Tarjetas con avatares nítidos, badges de ficha destacados y menús de acción contextual.

4. **Diseño de Calendarios y Matrices de Alta Densidad:**
   * Celdas con alto contraste y bordes distintivos para cada tipo de turno (Día ☀️, Noche 🌙, Libre 🏖️).
   * Indicador del día actual (*Today ring*) con pulso visual sutil.
   * Tooltips informativos enriquecidos al pasar el cursor o hacer clic.

---

## 3. Guía de Accesibilidad & Rendimiento (WCAG 2.1 AA)

* **Contraste de Color:** Razón de contraste mínimo de `4.5:1` para texto normal y `3:1` para texto grande e insignias.
* **Estados de Foco Accesibles:** `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }`.
* **Zero Dependencies / Rendimiento Máximo:** Renderizado directo mediante Vanilla JavaScript y manipulación eficiente del DOM sin librerías pesadas innecesarias.
* **Soporte Responsivo Extremo:** Adaptación fluida desde pantallas móviles (360px), tablets, portátiles hasta monitores ultrawide (2K/4K).
