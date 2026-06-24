# PunchiSoft.github.io

PunchiSoft es un blog técnico y un espacio de proyectos personales, publicado
con GitHub Pages y desarrollado con HTML, CSS y JavaScript sin frameworks
externos.

Está enfocado en Linux, Fedora, inteligencia artificial, desarrollo de software
y mantenimiento industrial. Su propósito es documentar soluciones reales,
experiencias técnicas y aprendizajes prácticos que puedan servir como referencia.

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
├── data/posts.json                   # Catálogo y orden de publicaciones
├── js/posts.js                       # Renderizado automático del blog
├── software/index.html               # Proyectos de software
├── legal/index.html                  # Aviso legal y privacidad
├── seguridad/index.html              # Recomendaciones de seguridad
├── css/estilos.css                   # Estilos compartidos
├── icons/                            # Iconos SVG del proyecto
├── assets/                           # Capturas e imágenes
├── LICENSE                           # Licencia MIT del código fuente
├── COPYRIGHT.md                      # Alcance sobre contenidos y marca
└── SECURITY.md                       # Guía para reportar vulnerabilidades
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

## Publicar un artículo

Después de crear el HTML del artículo dentro de `blog/`, agregue sus metadatos a
`data/posts.json`. El listado del blog se ordena automáticamente por `date` y la
portada muestra la publicación más reciente. El objeto `featured` controla el
panel visual que acompaña al artículo en la portada.

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

El código fuente de este sitio se distribuye bajo la [licencia MIT](LICENSE),
salvo que se indique expresamente lo contrario. Los artículos, textos, capturas,
imágenes, logotipos, identidad visual, marca PunchiSoft y contenidos editoriales
conservan los derechos de sus respectivos titulares y no quedan cubiertos
automáticamente por la licencia MIT.

Los proyectos enlazados se rigen por sus propias licencias. Consulte
[COPYRIGHT.md](COPYRIGHT.md) para conocer el alcance completo.
