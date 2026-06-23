# PunchiSoft.github.io

Sitio oficial de PunchiSoft, publicado con GitHub Pages y desarrollado con HTML,
CSS y JavaScript sin frameworks externos.

PunchiSoft conecta Linux, programación e inteligencia artificial con una mirada
técnica vinculada al mantenimiento industrial, el análisis de sistemas y la
mejora de procesos.

## Sitio y enlaces oficiales

- Sitio: <https://punchisoft.github.io/>
- Perfil de GitHub: <https://github.com/PunchiSoft>
- Switch Turbo Monitor: <https://github.com/PunchiSoft/switch-turbo-monitor>
- LinkedIn de Cristian Muñoz Jiménez:
  <https://www.linkedin.com/in/cristianalexismunozjimenez/>

## Estructura

```text
.
├── index.html                         # Portada y perfil
├── blog/
│   ├── index.html                    # Índice del blog
│   └── switch-turbo-monitor.html     # Publicación principal
├── software/index.html               # Proyectos de software
├── legal/index.html                  # Aviso legal y privacidad
├── seguridad/index.html              # Recomendaciones de seguridad
├── css/estilos.css                   # Estilos compartidos
├── icons/                            # Iconos SVG del proyecto
├── assets/                           # Capturas e imágenes
└── SECURITY.md                       # Política para reportar vulnerabilidades
```

## Desarrollo local

No se requiere compilación ni instalación de dependencias. Desde la raíz del
repositorio puede iniciarse un servidor local:

```bash
python3 -m http.server 8000
```

Luego abra `http://localhost:8000` en el navegador. Se recomienda probar los
enlaces relativos y la navegación en resoluciones de escritorio y móvil antes de
publicar cambios.

## Publicación

El repositorio está preparado para publicarse directamente mediante GitHub
Pages desde la rama configurada en el proyecto. Todos los recursos utilizan
rutas compatibles con el dominio `punchisoft.github.io`.

## Privacidad y seguridad

El sitio no incorpora formularios, analítica, publicidad, cookies ni
almacenamiento local. GitHub Pages puede registrar información técnica, como la
dirección IP, para fines de seguridad de su infraestructura. El detalle se
explica en [legal/index.html](legal/index.html).

Las vulnerabilidades deben comunicarse siguiendo [SECURITY.md](SECURITY.md), sin
publicar datos sensibles ni detalles explotables en una incidencia pública.

## Licencia y contenidos

Este repositorio todavía no incluye una licencia propia. En consecuencia, la
publicación del código fuente no concede por sí sola permisos generales para
copiar, modificar o redistribuir el sitio. Los proyectos enlazados se rigen por
la licencia incluida en sus respectivos repositorios.

Los nombres, textos, capturas y elementos de identidad de PunchiSoft pertenecen
a sus respectivos titulares, salvo indicación expresa en contrario.
