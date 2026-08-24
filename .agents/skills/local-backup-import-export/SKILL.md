---
name: local-backup-import-export
description: Diseña backups, exportación, importación y restauración de bases locales. Úsala para formatos portables, validación, conflictos, privacidad y recuperación de datos.
---

# Local Backup Import Export

## Formato

Incluye identificador de formato, versión, fecha, aplicación y payload. Usa un esquema documentado e independiente del layout interno de IndexedDB cuando eso facilite evolución.

## Exportación

1. Obtén un snapshot consistente o declara sus límites.
2. Serializa tipos no JSON de forma inequívoca.
3. Incluye checksum si ayuda a detectar daño accidental, sin presentarlo como firma de autenticidad.
4. Minimiza metadatos y advierte si el archivo contiene información sensible.
5. Para grandes volúmenes, procesa por streams o lotes sin congelar la interfaz.

## Importación

1. Limita tamaño antes de cargar y profundidad/cantidad antes de materializar.
2. Parsea como datos, nunca como código o HTML.
3. Valida formato, versión, esquema e invariantes en un área temporal.
4. Presenta resumen y estrategia: reemplazar, fusionar o cancelar.
5. Ejecuta atómicamente cuando sea viable; si no, usa staging, progreso durable y rollback.
6. Verifica conteos e integridad antes de marcar éxito.

Prueba archivo vacío, truncado, versión futura, datos hostiles, duplicados, falta de cuota y cancelación. Nunca borres los datos vigentes antes de validar completamente la restauración.
