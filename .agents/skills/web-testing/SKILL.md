---
name: web-testing
description: Diseña e implementa pruebas para aplicaciones HTML con persistencia local. Úsala para estrategia unitaria, integración, navegador, fixtures, concurrencia y regresión.
---

# Web Testing

## Estrategia por riesgo

- Prueba reglas e invariantes del dominio sin DOM ni base.
- Prueba casos de uso con repositorios sustituibles.
- Prueba el adaptador real contra una base aislada.
- Prueba flujos críticos en navegador con APIs y eventos reales.
- Añade regresiones para fallos observados, no snapshots indiscriminados.

## Aislamiento

Usa una base única por prueba o limpia de forma controlada; cierra conexiones y espera la eliminación. Controla reloj, IDs y aleatoriedad. No dependas del orden de ejecución.

## Casos mínimos de persistencia

Cubre apertura nueva, CRUD, restricciones, transacción abortada, migración desde cada versión soportada, varias conexiones, cuota/fallo inyectado, importación inválida y recuperación.

## UI

Consulta por roles, nombres y texto que percibe el usuario. Verifica teclado, foco, estados de carga/error/vacío y persistencia tras recargar. Evita selectores acoplados a clases de estilo.

La suite debe fallar por comportamiento incorrecto, ser reproducible y mantener un tiempo razonable. Reporta qué se ejecutó y cualquier área no cubierta.
