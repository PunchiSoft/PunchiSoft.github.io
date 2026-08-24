---
name: trusted-types
description: Implanta Trusted Types y elimina sinks DOM peligrosos. Úsala para prevenir DOM XSS, crear políticas limitadas o migrar código que usa inserción de HTML dinámico.
---

# Trusted Types

## Objetivo

Conseguir que los sinks sensibles acepten únicamente valores producidos por políticas auditadas, reduciendo rutas de DOM XSS.

## Migración

1. Inventaría sinks como `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write` y creación dinámica de scripts.
2. Reemplázalos por `textContent`, `createElement`, setters de atributos seguros y plantillas DOM.
3. Activa `require-trusted-types-for 'script'` primero en modo de observación cuando sea posible.
4. Crea una política solo para el residuo imprescindible; mantenla pequeña, nombrada y cerca del sanitizador.
5. Restringe nombres con `trusted-types` y elimina la política por defecto una vez migrado el código.
6. Prueba entradas hostiles y navegadores sin soporte, donde siguen siendo obligatorios los sinks seguros.

## Reglas

- Trusted Types no valida reglas de negocio ni reemplaza sanitización.
- Una política que devuelve la entrada sin transformar anula el control.
- No disperses creación de políticas por componentes.
- No conviertas cadenas a tipos confiables para silenciar errores.

La finalización exige cero sinks evitables, políticas mínimas revisables y una CSP coherente con el modo de despliegue.
