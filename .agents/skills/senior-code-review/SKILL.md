---
name: senior-code-review
description: Revisa cambios de aplicaciones web locales buscando defectos concretos de datos, seguridad, accesibilidad, arquitectura, concurrencia y pruebas. Úsala cuando el usuario solicite review o auditoría de código.
---

# Senior Code Review

## Alcance

Inspecciona primero diff, instrucciones, contratos, esquema persistido y pruebas relacionadas. Entiende el comportamiento pretendido antes de señalar estilo.

## Prioridad

1. Pérdida, corrupción o migración incorrecta de datos.
2. Vulnerabilidades y exposición de información.
3. Comportamiento funcional, condiciones de carrera y errores no manejados.
4. Bloqueos de accesibilidad y compatibilidad.
5. Rendimiento con impacto demostrable.
6. Mantenibilidad que aumente riesgo concreto.

## Hallazgos

Cada hallazgo debe ser accionable, demostrar el escenario que lo activa, explicar el impacto y apuntar a las líneas mínimas relevantes. No reportes una preferencia como defecto. Comprueba si pruebas o código circundante ya mitigan el riesgo.

## Revisión específica

Verifica finalización real de transacciones, versionado/migración, sinks DOM, CSP, validación de importaciones, foco, estados de error, limpieza de recursos y pruebas de regresión.

Entrega primero hallazgos ordenados por severidad, luego preguntas y un resumen breve. Si no hay defectos, dilo claramente e indica riesgos o verificaciones faltantes.
