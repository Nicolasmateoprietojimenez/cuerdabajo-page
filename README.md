# Cuerdabajo — Sitio web oficial

Base del proyecto para la nueva página web de la agrupación musical colombiana **Cuerdabajo**.

Construido con Astro, TypeScript y Tailwind CSS. Esta entrega contiene únicamente la
configuración base: sin páginas ni componentes visuales todavía.

## Stack

- **Astro 5** — framework de contenido, rendimiento y SEO.
- **TypeScript** (modo `strict`) — tipado estricto en todo el proyecto.
- **Tailwind CSS 4** — integrado vía `@tailwindcss/vite`; los tokens de marca se
  definirán más adelante en `src/styles/global.css`.
- **ESLint 10** (flat config) + **Prettier** — calidad y formato consistentes.

## Requisitos

- Node.js >= 18.20 (recomendado LTS 20 o 22)

## Scripts

| Comando                | Descripción                                              |
| ---------------------- | -------------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo en `http://localhost:4321`        |
| `npm run build`        | Chequeo de tipos (`astro check`) + build de producción   |
| `npm run preview`      | Sirve el build de producción localmente                  |
| `npm run check`        | Solo chequeo de tipos de Astro                           |
| `npm run lint`         | Analiza el código con ESLint (0 warnings permitidos)     |
| `npm run lint:fix`     | Corrige automáticamente lo que ESLint pueda arreglar     |
| `npm run format`       | Formatea todo el proyecto con Prettier                   |
| `npm run format:check` | Verifica el formato sin escribir cambios                 |

## Estructura

```text
.
├── astro.config.mjs      # Config de Astro + plugin de Tailwind (Vite)
├── eslint.config.js      # ESLint flat config (TS + Astro)
├── .prettierrc.mjs       # Config de Prettier (+ plugins astro y tailwind)
├── tsconfig.json         # TS strict + alias de importación (@/...)
├── public/               # Activos estáticos (favicon, etc.)
└── src/
    ├── assets/           # Activos optimizados por Astro (images/, fonts/)
    ├── components/       # ui/ · layout/ · sections/ · cards/ · forms/ · seo/
    ├── content/          # Content Collections de Astro
    ├── data/             # Fuente única de datos del sitio
    ├── layouts/          # Plantillas de página (MainLayout…)
    ├── pages/            # Rutas (file-based routing)
    ├── styles/           # global.css + tokens de Tailwind
    ├── types/            # Interfaces TypeScript compartidas
    └── utils/            # Helpers y funciones puras
```

> La arquitectura está creada como estructura vacía (carpetas rastreadas con
> `.gitkeep`). Ver **[ARCHITECTURE.md](./ARCHITECTURE.md)** para el propósito de cada
> carpeta y las decisiones de diseño. Los componentes, datos y tipos se implementarán en
> la siguiente fase.

## Alias de importación

Configurados en `tsconfig.json`: `@/*`, `@components/*`, `@layouts/*`, `@data/*`,
`@types/*`, `@utils/*`, `@styles/*`, `@assets/*`.
