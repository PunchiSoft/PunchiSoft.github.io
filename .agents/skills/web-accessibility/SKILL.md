---
name: web-accessibility
description: Diseña e implementa accesibilidad en HTML, CSS y JavaScript. Úsala al crear componentes, navegación, formularios, modales, tablas o contenido dinámico.
---

# Web Accessibility

## Prioridades

1. HTML semántico y orden de lectura lógico.
2. Operación completa con teclado y foco perceptible.
3. Nombres, roles, estados e instrucciones comprensibles.
4. Contraste, reflow, zoom y reducción de movimiento.
5. Anuncios discretos para cambios dinámicos importantes.

Usa elementos nativos antes que ARIA. Mantén encabezados jerárquicos, landmarks y salto al contenido. No uses `tabindex` positivo. En diálogos implementa etiqueta, foco inicial, contención, Escape y retorno del foco. Asocia errores con texto visible y relaciones programáticas. Proporciona alternativas textuales según la función de la imagen.

No anuncies cada cambio: reserva regiones vivas para confirmaciones o errores importantes. Tras insertar o borrar, conserva o mueve el foco de forma predecible.

Valida con teclado, árbol accesible y lector de pantalla en flujos críticos cuando sea posible. El análisis automático complementa, pero no sustituye, la prueba manual.
