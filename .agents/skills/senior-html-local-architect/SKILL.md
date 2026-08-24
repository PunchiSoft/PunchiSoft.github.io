---
name: senior-html-local-architect
description: Diseña o modifica la arquitectura de aplicaciones HTML con persistencia local, separando UI, casos de uso, dominio e infraestructura. Úsala para decisiones estructurales o evolución técnica transversal.
---

# Senior HTML Local Architect

## Flujo

1. Inspecciona stack, entradas, flujo de datos, almacenamiento, pruebas y restricciones.
2. Identifica casos de uso, entidades, límites de confianza y requisitos offline.
3. Define dependencias en una dirección: UI → aplicación → dominio; infraestructura implementa puertos consumidos por aplicación.
4. Decide cambios mínimos y registra los que afecten contratos o persistencia.
5. Verifica un flujo principal y uno de fallo de extremo a extremo.

## Límites orientativos

```text
src/
├── ui/              # renderizado, eventos, accesibilidad
├── application/     # casos de uso y coordinación
├── domain/          # reglas e invariantes
├── infrastructure/  # IndexedDB, OPFS, importación
└── shared/          # utilidades realmente compartidas
```

Adapta nombres a las convenciones existentes; no reorganices solo para copiar el ejemplo.

## Invariantes

- La UI no abre transacciones ni conoce el esquema.
- Los repositorios exponen operaciones del dominio, no tablas genéricas.
- Los casos de uso no dependen del DOM y devuelven resultados explícitos.
- Las dependencias externas quedan detrás de adaptadores.
- El arranque controla versión, migración y recuperación antes de escribir.
- No uses estado global mutable como canal implícito.

Prefiere IndexedDB para datos estructurados comunes. Evalúa SQLite WASM/OPFS solo si SQL, relaciones o volumen justifican su coste; usa workers para trabajo que pueda bloquear la UI.

## Aceptación

Los límites son reconocibles, la persistencia puede sustituirse en pruebas, todo cambio de esquema tiene recuperación y los errores técnicos se traducen a resultados utilizables por la UI.
