---
name: accessibility-testing
description: Audita y prueba accesibilidad web con métodos automáticos y manuales. Úsala para verificar componentes o flujos frente a teclado, foco, semántica, contraste y tecnologías de asistencia.
---

# Accessibility Testing

## Plan

Selecciona flujos críticos y estados normal, vacío, error, loading y modal. Define navegadores y tecnologías de asistencia razonables para el proyecto.

## Capas

1. Inspecciona HTML y árbol accesible: nombre, rol, estado, relaciones y orden.
2. Ejecuta análisis automático y revisa cada hallazgo; no lo conviertas en único criterio.
3. Recorre todo con teclado: orden, foco visible, activación, Escape y retorno del foco.
4. Prueba zoom 200 %, reflow 320 CSS px o equivalente, y texto 400 % cuando aplique.
5. Verifica contraste y que color, sonido o posición no sean el único medio.
6. Usa lector de pantalla en flujos críticos y contenido dinámico.

## Reporte

Por hallazgo incluye impacto para el usuario, pasos reproducibles, elemento, expectativa, severidad y corrección sugerida. Prioriza bloqueos sobre diferencias cosméticas.

La aceptación requiere que las tareas esenciales funcionen sin ratón, el foco no se pierda, los controles tengan nombres correctos y los mensajes importantes sean perceptibles sin producir anuncios excesivos.
