---
name: refactoring-guardian
description: Planifica y ejecuta refactorizaciones seguras preservando comportamiento, datos y contratos. Úsala para reducir acoplamiento, extraer módulos o modernizar código sin cambiar funcionalidad.
---

# Refactoring Guardian

## Guardas

- Define qué comportamiento y contratos deben permanecer iguales.
- Caracteriza flujos sin cobertura antes de moverlos.
- Separa refactorización mecánica de cambios funcionales o de esquema.
- Conserva compatibilidad de datos; una refactorización no autoriza migración destructiva.
- Haz pasos pequeños, verificables y fáciles de revisar.

## Flujo

1. Mapea dependencias, efectos laterales, globals, listeners y acceso a almacenamiento.
2. Añade pruebas de caracterización en límites de mayor riesgo.
3. Introduce seams: funciones puras, interfaces de repositorio o adaptadores.
4. Mueve una responsabilidad por vez y actualiza consumidores.
5. Elimina compatibilidad temporal solo cuando ya no tenga callers.
6. Ejecuta pruebas, análisis y un flujo manual representativo tras cada fase.

## Límites

No mezcles formateo masivo, renombrados globales o sustitución de framework con un arreglo puntual. No crees abstracciones para un único caso especulativo. Mide rendimiento antes y después si cambia la ruta crítica.

Finaliza cuando el comportamiento observable se conserva, no hay rutas duplicadas y la nueva separación reduce un acoplamiento demostrable.
