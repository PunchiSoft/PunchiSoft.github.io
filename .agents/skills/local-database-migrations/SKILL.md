---
name: local-database-migrations
description: Diseña y verifica migraciones IndexedDB o SQLite. Úsala al cambiar stores, tablas, índices, restricciones, formatos o versiones persistidas.
---

# Local Database Migrations

## Reglas críticas

- Nunca cambies silenciosamente la interpretación de datos existentes.
- Cada migración define origen, destino, precondiciones y validación posterior.
- Hazla idempotente si puede reanudarse fuera de una transacción atómica.
- No borres la base para resolver incompatibilidades sin autorización y respaldo.
- Conserva recuperación ante fallos y falta de cuota.

## Flujo

1. Inspecciona esquema, versiones desplegadas y volumen.
2. Define transformación y compatibilidad entre pestañas/versiones.
3. Crea respaldo o estrategia de copia antes de lo irreversible.
4. Migra en pasos pequeños; limita `upgradeneeded` a operaciones compatibles.
5. Valida conteos, claves, relaciones e invariantes.
6. Registra versión y diagnóstico sin datos sensibles.
7. Prueba desde cada versión soportada y simula interrupción.

Para transformaciones grandes, separa cambio estructural y conversión por lotes, guarda progreso y permite reanudar. Una base nueva y cada versión soportada deben terminar en el mismo esquema lógico sin pérdida silenciosa.
