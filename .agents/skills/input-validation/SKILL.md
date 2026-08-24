---
name: input-validation
description: Diseña validación y normalización de formularios, importaciones y datos persistidos. Úsala para esquemas, mensajes de error, límites, coerción y defensa frente a entradas no confiables.
---

# Input Validation

## Capas

- Usa restricciones HTML para respuesta inmediata, pero no como única validación.
- Valida en el límite de cada caso de uso antes de mutar estado o persistencia.
- Revalida archivos importados y registros heredados al leerlos.
- Mantén separadas validación de forma, normalización y reglas de negocio.

## Reglas

- Define esquemas explícitos: tipo, presencia, longitud, rango, formato, enum y campos adicionales.
- Evita coerción ambigua; trata números, booleanos, fechas y zonas horarias de forma explícita.
- Aplica límites de tamaño, profundidad, cantidad de registros y complejidad antes de procesar.
- Normaliza solo cuando el dominio lo permita; conserva el original si tiene significado.
- Los mensajes indican qué corregir sin revelar detalles internos.
- La validación evita datos inválidos; el encoding o sink seguro evita inyección. No los confundas.

## Experiencia

No borres lo introducido tras un fallo. Asocia cada error a su campo, enfoca un resumen cuando sea útil y anuncia el resultado sin interrumpir cada pulsación.

## Pruebas

Cubre límites exactos, vacío, Unicode, espacios, duplicados, formatos locales, payload grande, campos desconocidos y combinaciones inválidas. Verifica que un fallo no produzca escrituras parciales.
