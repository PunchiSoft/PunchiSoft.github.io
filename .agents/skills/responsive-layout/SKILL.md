---
name: responsive-layout
description: Implementa o revisa layouts adaptables. Úsala para problemas de viewport, reflow, contenedores, tablas, navegación o interacción táctil.
---

# Responsive Layout

Diseña desde las restricciones del contenido. Añade breakpoints cuando el layout deje de funcionar, no para imitar una lista fija de dispositivos.

- Incluye un viewport correcto y evita anchos mínimos que fuercen scroll global.
- Prefiere Grid para relaciones bidimensionales y Flexbox para distribución lineal.
- Usa tamaños fluidos con límites cuando mejoren legibilidad.
- Permite reflow a 320 CSS px y zoom de 400 % en flujos esenciales.
- Mantén objetivos táctiles adecuados y separados.
- Trata tablas con una estrategia explícita: scroll contenido, columnas prioritarias o vista alternativa.
- Respeta áreas seguras, orientación y preferencias de movimiento.

Prueba viewport estrecho, medio y ancho; texto ampliado; cadenas largas; teclado; contenido vacío y máximo razonable. No ocultes información esencial en móvil ni uses posicionamiento absoluto para la estructura principal.
