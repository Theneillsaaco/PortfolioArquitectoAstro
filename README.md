
# PortfolioArquitectoAstro

Este es el repositorio del portafolio profesional de un arquitecto, desarrollado con [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/) y contenido dinámico gestionado mediante archivos Markdown. El sitio está diseñado para mostrar proyectos arquitectónicos, experiencia profesional y facilitar el contacto con potenciales clientes.

## ✨ Características principales

- **Listado de proyectos** con imágenes, descripciones, ubicación, área, año y etiquetas.
- **Vista detallada de cada proyecto** accediendo a `/PortfolioArquitectoAstro/project/[slug]`.
- **Página de experiencia** y presentación personal.
- **Sección de contacto** para consultas directas.
- **Diseño responsive y moderno** usando Tailwind CSS.
- **Gestión de contenido** mediante Markdown en `src/content/projects`.

## 🚀 Estructura del proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes reutilizables (layout, portfolio, ui)
│   ├── content/
│   │   └── projects/     # Proyectos en formato Markdown
│   ├── icons/            # Iconos SVG
│   ├── layouts/          # Layout principal
│   ├── pages/            # Páginas principales y dinámicas
│   └── styles/           # Estilos globales
├── package.json
└── astro.config.mjs
```

## 🧑‍💻 Scripts útiles

| Comando           | Acción                                    |
|-------------------|-------------------------------------------|
| `npm install`     | Instala las dependencias                  |
| `npm run dev`     | Inicia el servidor de desarrollo          |
| `npm run build`   | Genera la versión de producción           |
| `npm run preview` | Previsualiza el sitio en modo producción  |

## 📁 Agregar un nuevo proyecto

1. Crea un archivo `.md` en `src/content/projects/` siguiendo la estructura de los ejemplos existentes.
2. Completa los campos: `title`, `description`, `date`, `type`, `location`, `meters`, `tags`, `img`.
3. El proyecto aparecerá automáticamente en el portafolio.

## 🌐 Demo local

1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Inicia el servidor: `npm run dev`
4. Accede a `http://localhost:4321/PortfolioArquitectoAstro`

## 📦 Tecnologías usadas
- Astro
- Tailwind CSS
- Markdown
- Iconos SVG

---

Desarrollado por Theneillsaaco. Para consultas, usa la sección de contacto del sitio.
