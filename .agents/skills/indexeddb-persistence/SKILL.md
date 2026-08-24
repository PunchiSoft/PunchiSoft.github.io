---
name: indexeddb-persistence
description: Diseña, implementa y depura persistencia con IndexedDB. Úsala para stores, índices, transacciones, repositorios, concurrencia, versionado y consultas locales.
---

# IndexedDB Persistence

- Deriva stores e índices de consultas reales y reglas de unicidad.
- Expón repositorios de dominio; no filtres resultados masivos en la UI.
- Mantén transacciones cortas y agrupa escrituras atómicas.
- No esperes red o tareas largas dentro de una transacción.
- Usa formatos estables y documentados para claves, fechas y serialización.

Centraliza la conexión y maneja `upgradeneeded`, `blocked`, `versionchange`, error y cierre. Ante `versionchange`, cierra conexiones antiguas y comunica cuándo recargar.

## Operaciones

1. Abre la transacción con el modo y stores mínimos.
2. Considera exitosa una escritura solo al completar la transacción.
3. Traduce errores nativos a categorías del dominio conservando su causa.
4. Implementa paginación o cancelación en lecturas extensas.
5. Valida al entrar y también al leer datos heredados.

No asumas persistencia permanente: cuota, limpieza y modo privado pueden eliminar datos. Prueba creación, reapertura, aborto, restricción única, migración, bloqueo y fallo por cuota con una base aislada por prueba.
