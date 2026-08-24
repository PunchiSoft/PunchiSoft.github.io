---
name: master-senior-html-local-app
description: Orquesta el diseño, implementación y revisión integral de una aplicación HTML con base de datos local. Úsala para tareas completas o transversales que requieren coordinar arquitectura, UX, datos, seguridad, resiliencia y calidad.
---

# Master Senior HTML Local App

## Misión

Coordinar solo las especialidades necesarias para entregar una aplicación local segura, accesible, mantenible y recuperable, conservando las decisiones y el stack del proyecto.

## Inicio obligatorio

1. Lee instrucciones locales e inspecciona estructura, estado de cambios, stack, entradas, pruebas y despliegue.
2. Aclara el resultado esperado mediante la solicitud y el código; pregunta solo si una elección cambia materialmente el producto.
3. Identifica riesgos en datos, compatibilidad, seguridad, accesibilidad y operaciones irreversibles.
4. Selecciona las skills especializadas usando la tabla siguiente. Lee sus `SKILL.md` antes de actuar.

## Enrutamiento

| Necesidad | Skill |
|---|---|
| Límites y arquitectura | `senior-html-local-architect` |
| Organización de módulos | `web-project-structure` |
| Flujos y sistema visual | `ui-ux-design-system` |
| Viewports y reflow | `responsive-layout` |
| Implementación accesible | `web-accessibility` |
| Persistencia IndexedDB | `indexeddb-persistence` |
| Entidades e índices | `local-data-modeling` |
| Cambio de esquema | `local-database-migrations` |
| Amenazas y hardening | `web-security-hardening` |
| Restricción de recursos | `content-security-policy` |
| DOM XSS | `trusted-types` |
| Privacidad local | `sensitive-local-data` |
| Entradas e importaciones | `input-validation` |
| Estado y concurrencia | `frontend-state-management` |
| Fallos y recuperación | `frontend-error-handling` |
| Backup y restauración | `local-backup-import-export` |
| Cuota, desalojo, pestañas | `storage-resilience` |
| SQL en navegador | `sqlite-wasm-opfs` |
| Rendimiento medido | `web-performance` |
| Estrategia de pruebas | `web-testing` |
| Auditoría accesible | `accessibility-testing` |
| Revisión de cambios | `senior-code-review` |
| Refactorización segura | `refactoring-guardian` |

Las rutas se resuelven como `../<nombre>/SKILL.md` desde esta carpeta. No cargues todas las skills por defecto: usa únicamente las que cambien decisiones en la tarea actual.

## Secuencia de entrega

1. Define casos de uso, datos e invariantes.
2. Establece límites y contratos entre UI, aplicación, dominio e infraestructura.
3. Diseña modelo, versión, migración, backup y recuperación antes de persistir.
4. Implementa flujo vertical mínimo con estados vacío, carga, éxito y fallo.
5. Endurece los límites de confianza y la política de contenido.
6. Completa accesibilidad, adaptación y rendimiento sobre evidencia.
7. Prueba los riesgos principales y revisa el cambio completo.

## Puertas de calidad

- Ningún cambio destructivo de datos sin autorización, migración y recuperación.
- Ningún dato no confiable llega a un sink ejecutable.
- Las tareas esenciales funcionan con teclado y mantienen foco comprensible.
- La UI nunca afirma que un dato se guardó antes de confirmarse la transacción.
- La aplicación maneja falta de cuota, importación inválida y versión incompatible.
- Las dependencias nuevas tienen una justificación concreta.
- Las verificaciones cubren comportamiento, persistencia y riesgos afectados.

## Entrega final

Resume cambios y decisiones, indica verificaciones ejecutadas y comunica riesgos residuales o pasos que dependan del entorno. No declares éxito si una ruta crítica o migración relevante no fue comprobada.
