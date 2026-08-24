---
name: sqlite-wasm-opfs
description: Evalúa e implementa SQLite compilado a WebAssembly con persistencia OPFS. Úsala cuando SQL, relaciones, consultas complejas o volumen justifican superar IndexedDB.
---

# SQLite WASM OPFS

## Decisión de adopción

Compara consultas, relaciones, volumen, atomicidad, compatibilidad, tamaño del bundle, tiempo de arranque, workers, aislamiento y soporte de navegador. IndexedDB suele bastar para CRUD estructurado; SQLite se justifica por capacidades concretas, no por familiaridad.

## Arquitectura

- Ejecuta SQLite en un worker para no bloquear la UI.
- Encapsula mensajes en un protocolo versionado con IDs, resultados y errores serializables.
- Mantén SQL parametrizado; nunca concatena valores no confiables.
- Usa transacciones explícitas para invariantes multitabla.
- Configura y documenta el VFS/OPFS elegido y su matriz de compatibilidad.
- Diseña fallback o mensaje claro cuando OPFS o las capacidades requeridas no existan.

## Ciclo de vida

Centraliza inicialización, migraciones, checkpoints, cierre y recuperación. No envíes una conexión o handles OPFS entre contextos incompatibles. Limita resultados y pagina consultas extensas.

## Entrega

Mide bundle, arranque, memoria y consultas representativas. Prueba recarga, interrupción, migración, falta de espacio, navegador sin soporte, importación/exportación y mensajes concurrentes. Documenta diferencias de durabilidad y compatibilidad respecto de IndexedDB.
