---
name: sensitive-local-data
description: Evalúa y reduce riesgos al manejar datos sensibles en almacenamiento local. Úsala para credenciales, información personal, cifrado, retención, exportaciones o borrado.
---

# Sensitive Local Data

## Principio

El navegador no es un enclave seguro. XSS, extensiones, malware, copias del perfil y acceso al dispositivo pueden exponer IndexedDB, OPFS y localStorage. No prometas protección que el modelo cliente no puede ofrecer.

## Decisiones

1. Clasifica datos y determina si realmente deben almacenarse.
2. Minimiza campos, precisión y tiempo de retención.
3. Separa datos de diagnóstico y evita registrar contenido sensible.
4. Si el cifrado es requisito, define contra qué adversario protege, origen de clave, bloqueo, recuperación y rotación.
5. Nunca guardes claves junto al ciphertext como supuesto control de confidencialidad.
6. Protege exportaciones con advertencias y formatos inequívocos; evita nombres o metadatos reveladores.
7. Implementa borrado verificable dentro de las capacidades del navegador y comunica sus límites.

## Secretos

Tokens de servicio, claves API privadas y credenciales maestras no pertenecen al frontend. Si la función requiere un secreto real, necesita un componente confiable fuera del cliente o credenciales limitadas aportadas por el usuario.

## Aceptación

Existe inventario y retención definidos, el producto no almacena datos innecesarios, el bloqueo y la recuperación son comprensibles, y la documentación refleja honestamente las garantías y límites.
