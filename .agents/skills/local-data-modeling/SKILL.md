---
name: local-data-modeling
description: Modela datos persistidos localmente, invariantes, identificadores, relaciones e índices. Úsala antes de crear o cambiar esquemas IndexedDB o SQLite.
---

# Local Data Modeling

1. Parte de casos de uso, consultas, volumen y ciclo de vida.
2. Define entidades, value objects, relaciones, propiedad y reglas de borrado.
3. Elige identificadores estables e independientes de etiquetas visibles.
4. Establece formatos canónicos para fechas, zonas, números, enums y versión.
5. Diseña índices solo para consultas justificadas.
6. Documenta invariantes que aplicación y base deben preservar.

Normaliza para integridad; desnormaliza solo con sincronización o reconstrucción clara. Distingue ausencia, vacío y desconocido. Evita guardar estado derivable sin justificación. Usa borrado lógico solo si recuperación, auditoría o sincronización lo requieren. Separa metadatos de esquema de datos de negocio.

Todo cambio declara versión anterior y nueva, compatibilidad, transformación, validación y recuperación. Entrega un mapa breve de entidades, claves, relaciones, restricciones, índices, consultas, volumen supuesto y datos sensibles.
