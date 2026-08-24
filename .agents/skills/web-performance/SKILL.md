---
name: web-performance
description: Mide y mejora rendimiento de aplicaciones HTML locales. Úsala para arranque, interacción, renderizado, memoria, consultas, bundles y trabajo intensivo.
---

# Web Performance

## Método

1. Define una métrica y escenario reproducible antes de optimizar.
2. Perfila en un dispositivo y volumen de datos representativos.
3. Separa coste de carga, JavaScript, estilo/layout, pintura, almacenamiento y memoria.
4. Cambia el cuello de botella dominante con la intervención más pequeña.
5. Repite la medición y verifica accesibilidad y corrección.

## Tácticas

- Mantén el hilo principal libre; divide tareas largas o llévalas a un worker.
- Renderiza por lotes, virtualiza listas solo cuando el volumen lo exige y conserva navegación accesible.
- Usa índices y paginación; evita leer toda la base para una vista parcial.
- Reduce dependencias y carga código/recursos cuando se necesiten.
- Evita alternar lecturas y escrituras de layout en bucles.
- Cancela búsquedas obsoletas y aplica debounce solo donde la semántica lo permita.
- Libera listeners, URLs de objetos y referencias grandes.

No aceptes una microoptimización basada solo en intuición. Registra escenario, antes, después y coste funcional del cambio.
