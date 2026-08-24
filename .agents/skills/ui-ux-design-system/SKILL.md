---
name: ui-ux-design-system
description: Diseña y mejora interfaces, flujos y sistemas visuales para aplicaciones web locales. Úsala para componentes, tokens, jerarquía, interacción, formularios y estados.
---

# UI/UX Design System

Identifica usuarios, tareas frecuentes, criticidad, densidad de datos, dispositivos y lenguaje existente. Conserva la identidad visual salvo petición expresa.

## Sistema

- Define tokens semánticos de color, tipografía, espacio, radio, sombra y movimiento.
- Construye componentes por función y estado.
- Incluye normal, hover, focus, active, disabled, loading, empty, error y success.
- Mantén contraste y foco visibles; el color nunca es el único indicador.
- Usa texto claro y confirmación proporcional a la reversibilidad.

## Flujo

1. Modela la tarea principal y puntos de decisión.
2. Ordena contenido por prioridad y frecuencia.
3. Define componentes y variantes mínimas.
4. Implementa HTML semántico antes de añadir ARIA.
5. Prueba teclado, zoom, texto largo, datos vacíos y errores.
6. Revisa consistencia en todas las vistas afectadas.

En formularios, usa etiquetas persistentes, explica restricciones útiles, coloca errores junto al campo, conserva datos tras fallos recuperables y diferencia guardado, pendiente, conflicto y fallo.

La acción principal debe ser evidente y todos los estados deben comunicar honestamente la situación de los datos locales.
