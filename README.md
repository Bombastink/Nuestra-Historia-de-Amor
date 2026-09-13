# Libro de Amor - Historia Interactiva

Una página web interactiva que simula un libro de pasta dura con animación de pasar de página y sonido.

## Características

- Animación de volteo de página al hacer clic en los botones "Anterior" y "Siguiente".
- Sonido de hoja al pasar de página.
- Diseño estilo collage con tipografía manuscrita (Dancing Script).
- Utiliza las imágenes de la carpeta `img/`.
- Totalmente responsive.

## Estructura del proyecto

```
/Libro de amor
├── index.html          # Estructura principal
├── style.css           # Estilos y animaciones
├── script.js           # Lógica de cambio de páginas y animación
├── /img                # Imágenes utilizadas (JPEG)
├── /audio              # Audio de paso de página (placeholder)
│   └── page-turn.mp3   # Reemplazar con un sonido real
├── README.md           # Este archivo
└── .gitignore          # Archivos ignorados por Git
```

## Cómo usar localmente

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador (Chrome, Firefox, Safari, Edge).
3. Usa los botones para navegar por la historia.
4. Asegúrate de reemplazar el archivo `audio/page-turn.mp3` con un sonido real de paso de página para una mejor experiencia.

## Despliegue en GitHub Pages

1. Sube este repositorio a GitHub.
2. En el repositorio, ve a **Settings** → **Pages**.
3. Under **Source**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
4. Guarda los cambios. GitHub proporcionará una URL donde tu sitio estará disponible.
5. Espera unos minutos y visita la URL proporcionada.

## Personalización

- Cambiar imágenes: reemplaza los archivos en `img/` y actualiza las rutas en `script.js` (array `pages`).
- Cambiar texto: modifica el contenido HTML dentro de cada objeto en el array `pages` de `script.js`.
- Cambiar estilo: edita `style.css` (colores, tipografía, etc.).
- Cambiar sonido: sustituye `audio/page-turn.mp3` por tu propio efecto de paso de página.

## Créditos

- Tipografía: [Dancing Script](https://fonts.google.com/spec/Dancing+Script) de Google Fonts.
- Imágenes: proporcionadas por el usuario.
- Creador: Gilberto Casípeta Flortes

¡Disfruta de tu historia de amor interactiva!