---
name: frontend-state-management
description: Diseña estado predecible para aplicaciones web sin acoplar UI y persistencia. Úsala para stores, acciones, estado derivado, concurrencia, autosave o sincronización entre vistas.
---

# Frontend State Management

## Clasificación

Distingue estado persistido, estado de dominio en memoria, estado derivado, estado efímero de UI y estado de operación remota/local. No dupliques la misma fuente de verdad en varias capas.

## Flujo

1. Modela acciones del usuario como casos de uso explícitos.
2. Lee o muta mediante servicios/repositorios, no desde componentes.
3. Actualiza la vista desde snapshots inmutables o cambios observables claros.
4. Deriva filtros, conteos y selecciones cuando sea barato; memoiza solo si se mide la necesidad.
5. Representa carga, éxito, vacío, error, conflicto y cancelación como estados distintos.

## Concurrencia

- Evita que respuestas antiguas sobrescriban acciones nuevas; usa secuencias, versiones o cancelación.
- Define semántica de autosave y muestra pendientes o fallos.
- Coordina múltiples pestañas si pueden editar los mismos datos; no asumas un único proceso.
- Mantén operaciones idempotentes cuando puedan repetirse.

No introduzcas una librería de estado si un módulo pequeño y explícito basta. Las pruebas deben poder ejecutar transiciones sin DOM ni base real.
