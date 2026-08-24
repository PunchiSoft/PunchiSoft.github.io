---
name: storage-resilience
description: Fortalece aplicaciones frente a cuota, desalojo, corrupción, cierres, múltiples pestañas y capacidades variables del navegador. Úsala para continuidad y recuperación del almacenamiento local.
---

# Storage Resilience

## Riesgos

Modela cuota agotada, limpieza del navegador, almacenamiento no persistente, modo privado, cierre durante escritura, conexión bloqueada, múltiples pestañas, versiones incompatibles y archivos dañados.

## Controles

- Detecta capacidades en tiempo de ejecución y ofrece una degradación explícita.
- Consulta estimaciones de uso cuando aporten valor; no las trates como garantía.
- Solicita persistencia solo con una razón de producto y comunica que el navegador decide.
- Mantén transacciones atómicas y checkpoints reanudables para procesos largos.
- Conserva respaldo antes de migraciones de riesgo y prueba la restauración.
- Coordina pestañas con `BroadcastChannel`, eventos o un mecanismo compatible; versióna mensajes.
- Ofrece modo lectura o exportación cuando escribir deje de ser seguro.

## Recuperación

Al detectar datos inválidos, detén nuevas mutaciones, conserva evidencia mínima no sensible, permite exportar el original si es seguro y guía entre reintentar, restaurar o reinicializar. Nunca reinicialices automáticamente una base que aún pueda recuperarse.

## Pruebas

Simula cuota, abortos, recarga en mitad de lotes, pestañas con versiones distintas y pérdida de almacenamiento. Verifica que la aplicación no comunique éxito antes de durabilidad y que ninguna recuperación destruya la única copia válida.
