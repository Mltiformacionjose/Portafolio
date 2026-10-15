# José.dev — Portfolio Personal (Full-Stack Developer)

Portfolio personal de **José**, estudiante de Desarrollo Web & Frontend, diseñado en **Stitch**, exportado a HTML y configurado con una **instalación local de Tailwind CSS** (sin CDN) para poder publicarse en **GitHub Pages**.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-4cd7f6)

---

## ✨ Características

- Hero con fotografía personal, presentación y CTAs.
- Secciones: **Sobre mí**, **Formación académica**, **Stack tecnológico**, **Proyectos destacados** y **Contacto**.
- **3 proyectos** con imágenes propias (Warframe Tracker, World Cup 2026 e Imaginary Country).
- Header fijo con navegación, Footer y botón flotante de contacto.
- Diseño **responsive** (mobile-first) con glassmorphism y tema oscuro.
- Sección de **estadísticas de GitHub** en tiempo real (API pública `github-readme-stats`).
- **CV descargable** (`cv.html`, imprimible como PDF).
- Formulario de contacto simulado (sin backend).

## 🛠 Tecnologías

| Capa       | Tecnologías |
|------------|-------------|
| Frontend   | HTML5 semántico, CSS, Tailwind CSS (local, vía npm) |
| Tipografía | Google Fonts: Montserrat, Inter, Geist, Material Symbols |
| Build      | Tailwind CSS CLI (npm scripts) |
| Despliegue | GitHub Pages |

## 📁 Estructura

```
├── index.html                # Portfolio principal
├── cv.html                   # CV imprimible
├── css/
│   └── output.css            # CSS compilado por Tailwind (se genera con npm run build:css)
├── assets/
│   └── img/                  # Fotografías e imágenes locales
├── src/
│   └── input.css             # Directivas @tailwind (entrada)
├── tailwind.config.js        # Configuración de Tailwind (colores, tipografías, spacing)
├── diseno-stich/             # Diseños previos y capturas del proceso en Stitch
├── package.json              # Dependencias y scripts npm
└── .gitignore
```

## 🚀 Puesta en marcha (local)

Requisitos: **Node.js** (18+) y **npm**.

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar el CSS de Tailwind (genera css/output.css)
npm run build:css

# 3. Modo desarrollo: recompila automáticamente al guardar
npm run watch:css

# 4. Servir la página en local
npm run start        # o abre index.html directamente en el navegador
```

> ⚠️ **Importante:** este proyecto **NO usa el CDN de Tailwind**. Todo el CSS se compila localmente desde `src/input.css` con `tailwind.config.js`. Si modificas clases en `index.html`, ejecuta `npm run build:css` para regenerar el CSS.

## 🌍 GitHub Pages

**🌐 Sitio publicado:** https://Mltiformacionjose.github.io/Portafolio/

El portfolio está publicado desde la rama `main` (carpeta raíz `/`). Los enlaces usan rutas relativas, por lo que funciona bajo el subdirectorio `/Portafolio/` sin configuración adicional.

> 💡 Al subir cambios, el CSS precompilado en `css/output.css` ya está incluido, por lo que **GitHub Pages sirve la web directamente** sin necesidad de ejecutar `npm build` en el servidor. Si modificas clases Tailwind, recuerda ejecutar `npm run build:css` antes de hacer el commit.

## ✅ Checklist

- [x] Header con navegación
- [x] Main con todas las secciones y Footer
- [x] Fotografía personal y una imagen por proyecto
- [x] Diseño responsive
- [x] Tailwind CSS instalado localmente (npm), sin CDN
- [x] Listo para GitHub Pages

---

© 2026 José. Todos los derechos reservados.
