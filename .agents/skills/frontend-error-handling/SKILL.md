---
name: frontend-error-handling
description: Diseña manejo, clasificación y presentación de errores en aplicaciones web locales. Úsala para excepciones, recuperación, diagnóstico, estados degradados y mensajes al usuario.
---

# Frontend Error Handling

## Taxonomía

Distingue validación, conflicto, no encontrado, permiso/capacidad, cuota, corrupción, migración, compatibilidad, cancelación y fallo inesperado. Conserva la causa técnica, pero expón a la UI un error seguro y accionable.

## Manejo

- Captura en el límite capaz de recuperar o añadir contexto; no tragues excepciones.
- Una escritura se confirma solo al terminar su transacción.
- Los errores globales son última defensa y no sustituyen manejo local.
- No reintentes automáticamente operaciones no idempotentes.
- Mantén usable la parte no afectada y ofrece reintentar, exportar, liberar espacio o restaurar cuando aplique.
- No incluyas datos sensibles, contenido completo ni stack traces en mensajes o telemetría pública.

## UI

Comunica qué ocurrió, impacto sobre los datos y siguiente acción. Usa mensajes inline para campos, banners para estado de vista y diálogos solo cuando la tarea no pueda continuar. Gestiona foco y anuncios accesibles.

## Pruebas

Inyecta fallos de apertura, lectura, escritura, cuota, migración y parseo. Verifica ausencia de escrituras parciales, mensajes correctos, recuperación y continuidad tras recargar.
