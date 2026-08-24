---
name: web-project-structure
description: Organiza proyectos HTML/CSS/JavaScript en módulos coherentes. Úsala al crear estructura, separar archivos grandes o establecer convenciones de responsabilidades e importación.
---

# Web Project Structure

1. Mapea entradas HTML, módulos, estilos, recursos, almacenamiento y pruebas.
2. Agrupa por responsabilidad o feature; evita directorios genéricos sin límites claros.
3. Mantén puntos de entrada pequeños: composición, inicialización y ciclo de vida.
4. Extrae código por límite conceptual o de prueba, no por un número arbitrario de líneas.
5. Actualiza rutas, pruebas y documentación; valida la carga en el entorno real.

## Convenciones

- Usa ES Modules y rutas compatibles con el stack actual.
- Evita ciclos y módulos de utilidades convertidos en dependencias universales.
- Separa estilos base, tokens, componentes y páginas.
- Mantén assets generados separados de fuentes editables.
- Centraliza configuración; no dupliques constantes de negocio.

Evita un único archivo con UI, dominio y persistencia; listeners con consultas, validación y renderizado mezclados; imports hacia detalles internos; y movimientos cosméticos durante correcciones acotadas.

El resultado debe tener responsabilidades explicables, dependencias rastreables y una organización que facilite pruebas aisladas.
