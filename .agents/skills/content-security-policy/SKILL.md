---
name: content-security-policy
description: Diseña, despliega y depura Content Security Policy para aplicaciones web. Úsala al restringir scripts, estilos, conexiones, workers, frames y otros recursos o al eliminar dependencias de inline/eval.
---

# Content Security Policy

## Procedimiento

1. Inventaría recursos por tipo y origen: scripts, estilos, imágenes, fuentes, conexiones, workers, frames y manifests.
2. Elimina scripts inline, handlers HTML y evaluación dinámica antes de endurecer.
3. Parte de `default-src 'none'` y habilita solo lo necesario con directivas específicas.
4. Prefiere nonces o hashes para excepciones inevitables; evita `'unsafe-inline'` y `'unsafe-eval'`.
5. Añade `object-src 'none'`, `base-uri 'none'` o `'self'` y `frame-ancestors` apropiado.
6. Despliega primero en report-only cuando exista infraestructura para revisar reportes, y luego aplica.
7. Prueba todos los flujos, workers y modos offline.

## Contexto de entrega

Una política enviada por cabecera ofrece el control más completo. Si la aplicación solo puede usar `<meta http-equiv>`, documenta sus limitaciones, coloca el elemento temprano y no declares directivas que ese mecanismo no soporte.

## Política orientativa

```text
default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; worker-src 'self'; object-src 'none';
base-uri 'none'; frame-ancestors 'none'; require-trusted-types-for 'script'
```

Adapta esta base al inventario real. No amplíes toda una directiva para corregir un único recurso bloqueado.
