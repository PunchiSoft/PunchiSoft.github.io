---
name: web-security-hardening
description: Revisa y endurece aplicaciones web locales frente a XSS, inyección, dependencias riesgosas, exposición de datos y límites de confianza. Úsala para diseño o auditoría de seguridad general.
---

# Web Security Hardening

## Modelo de amenazas

Antes de cambiar código, identifica activos, entradas, actores, límites de confianza, canales de importación/exportación, recursos remotos y capacidades del navegador. Una aplicación local sigue procesando datos no confiables.

## Controles

- Renderiza texto con `textContent` y atributos mediante APIs seguras.
- Evita `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `eval`, `Function` y URLs `javascript:`.
- Si HTML arbitrario es un requisito, usa un sanitizador mantenido con política mínima y prueba cargas maliciosas.
- Valida protocolos y destinos de enlaces; usa `rel="noopener noreferrer"` cuando corresponda.
- Reduce terceros, fija versiones y revisa dependencias y artefactos de build.
- Configura CSP restrictiva y Trusted Types como defensa en profundidad.
- No incrustes secretos: todo código y almacenamiento del cliente es accesible al usuario local.
- Minimiza datos sensibles, vida útil y contenido de logs.

## Revisión

Busca fuentes y sinks, propagación de datos, serialización, importación, plantillas, workers, service workers, mensajes entre contextos y fallos abiertos. Prioriza por impacto y posibilidad real de explotación; no presentes headers irrelevantes como solución a amenazas locales.

## Aceptación

Cada entrada no confiable tiene validación contextual, cada salida usa un sink seguro, los privilegios y recursos remotos son mínimos, y los riesgos residuales quedan documentados con pruebas reproducibles.
