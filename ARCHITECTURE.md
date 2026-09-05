# Arquitectura del proyecto — Cuerdabajo

Documento de referencia de la estructura de carpetas. Esta fase deja **solo la
arquitectura base**: carpetas vacías (rastreadas con `.gitkeep`), sin componentes,
páginas ni datos todavía.

## Árbol de carpetas

```text
cuerdabajo_page/
├── public/                 # Activos servidos tal cual (favicon, robots.txt, og-image…)
│   └── favicon.svg
└── src/
    ├── assets/             # Activos procesados/optimizados por Astro (import en código)
    │   ├── images/         #   Imágenes (optimizadas con <Image /> de astro:assets)
    │   └── fonts/          #   Fuentes locales (self-hosting para rendimiento/privacidad)
    │
    ├── components/         # Componentes de UI, agrupados por responsabilidad
    │   ├── ui/             #   Átomos reutilizables y sin estado (Button, Badge, Icon…)
    │   ├── layout/         #   Piezas estructurales globales (Navbar, Footer, Container…)
    │   ├── sections/       #   Bloques de página de ancho completo (Hero, CTA, About…)
    │   ├── cards/          #   Tarjetas (MemberCard, EventCard, VideoCard…)
    │   ├── forms/          #   Formularios de contratación / captación de leads
    │   └── seo/            #   Meta tags, Open Graph y JSON-LD (datos estructurados)
    │
    ├── content/            # Content Collections de Astro (posts, eventos, prensa…)
    ├── data/               # Fuente única de datos del sitio (site, members, songs…)
    ├── layouts/            # Plantillas de página (MainLayout y variantes)
    ├── pages/              # Rutas del sitio (file-based routing de Astro)
    ├── styles/             # CSS global y tokens de Tailwind (@theme)
    │   └── global.css
    ├── types/              # Interfaces y tipos TypeScript compartidos
    └── utils/              # Funciones puras y helpers (formato, slugify, SEO…)
```

## Propósito de cada carpeta

**`public/`** — Archivos estáticos que se sirven sin transformación en la raíz del
dominio: `favicon`, `robots.txt`, `sitemap` generado, imagen social por defecto. Todo
lo que deba tener una URL fija y estable vive aquí.

**`src/assets/`** — A diferencia de `public/`, estos activos se importan desde el código
y Astro los optimiza (hash, compresión, `<Image />`). `images/` para gráficos y fotos;
`fonts/` para fuentes auto-alojadas (mejor rendimiento y privacidad que un CDN externo).

**`src/components/`** — La UI se divide por **responsabilidad**, no por página, para
maximizar la reutilización:

- `ui/` — átomos de diseño reutilizables y preferiblemente sin estado.
- `layout/` — estructura que se repite entre páginas (Navbar, Footer, Container).
- `sections/` — secciones completas que se componen para formar una página.
- `cards/` — patrón de tarjeta, muy repetido (integrantes, eventos, videos).
- `forms/` — formularios de contratación; son el eje de conversión del sitio, por eso
  tienen su propia categoría.
- `seo/` — componentes de metadatos, Open Graph y JSON-LD, aislados para mantener los
  layouts limpios y el SEO consistente.

**`src/content/`** — Reservada para las **Content Collections** de Astro: contenido con
esquema validado por Zod (por ejemplo notas de prensa, blog o eventos gestionados como
colección). Se activará con un `content.config.ts` cuando haga falta.

**`src/data/`** — **Fuente única de verdad** para la información del sitio. Ningún dato
se escribe directo en los componentes: salen de aquí (`site.ts`, `members.ts`,
`songs.ts`, `gallery.ts`, `events.ts`, `videos.ts`, `social.ts`, `stats.ts`). Facilita
mantener, traducir y, más adelante, migrar a un CMS sin tocar la UI.

**`src/layouts/`** — Plantillas que envuelven páginas (`MainLayout.astro` con `<head>`,
SEO, tipografía y contenedor principal). Centralizan lo común a todas las rutas.

**`src/pages/`** — Enrutamiento por archivos de Astro: cada `.astro`/`.md` es una ruta.
Se mantiene delgada; la lógica visual vive en `layouts/` y `components/`.

**`src/styles/`** — `global.css` es el punto de entrada de Tailwind y el lugar donde se
definirán los tokens de marca (`@theme`): colores, tipografía, espaciados, sombras,
radios y animaciones.

**`src/types/`** — Interfaces TypeScript compartidas (`Member`, `Song`, `Event`,
`Video`, `GalleryImage`, `SocialLink`, `Statistic`). Los archivos de `data/` las
consumen para garantizar consistencia de tipos en todo el sitio.

**`src/utils/`** — Funciones puras y helpers sin dependencias de UI (formateo de fechas,
`slugify`, construcción de metadatos, etc.).

## Decisiones arquitectónicas

1. **Separación por responsabilidad, no por página.** Los componentes se agrupan por lo
   que *son* (ui, sections, cards, forms, seo), lo que evita duplicación y escala mejor
   que carpetas por página.
2. **`data/` como fuente única de verdad.** Desacopla contenido de presentación; permite
   editar textos sin tocar componentes y deja la puerta abierta a un CMS o i18n.
3. **`public/` vs `assets/` bien diferenciados.** URLs estables frente a activos
   optimizados por el pipeline de Astro.
4. **Tipos centralizados en `types/`.** Un único contrato de datos consumido por `data/`
   y componentes, con TypeScript en modo `strict`.
5. **Carpetas vacías rastreadas con `.gitkeep`.** La arquitectura queda versionada desde
   el inicio aunque aún no haya implementación.

### Dos carpetas añadidas sobre la propuesta original (justificadas)

- **`components/forms/`** — El objetivo principal del sitio es **convertir visitantes en
  contrataciones**. Los formularios son una categoría de UI diferenciada y crítica para
  el negocio; merecen su propio espacio en lugar de mezclarse con `ui/` o `sections/`.
- **`components/seo/`** — El brief prioriza **SEO y Open Graph**. Aislar los componentes
  de metadatos y datos estructurados (JSON-LD) mantiene los layouts limpios y el SEO
  consistente y testeable.

También se subdividió `assets/` en `images/` y `fonts/` para separar gráficos de fuentes
auto-alojadas.

## Recomendaciones antes de implementar componentes

1. **Definir primero `types/` y `data/`.** Con el contrato de datos claro, los
   componentes se construyen sobre una base tipada y estable.
2. **Fijar los tokens de marca en `styles/global.css`** (`@theme`) antes que la UI:
   colores, tipografía, espaciados, sombras, radios y animaciones. Así todo componente
   nace consistente con la identidad visual.
3. **Construir `MainLayout.astro` + `seo/` en paralelo** para que el SEO/OG y la
   tipografía global existan desde la primera página.
4. **Empezar por `layout/` (Navbar, Footer) y `ui/` (Button)**, que son la base sobre la
   que se apoyan las `sections/`.
5. **Considerar más adelante** (solo si el proyecto lo pide): `i18n/` para multi-idioma
   y `content.config.ts` cuando el contenido justifique Content Collections.

> Nota: `src/pages/` está vacía a propósito. Astro mostrará un aviso *"Missing pages"* en
> el build hasta que se cree la primera ruta; es esperado en esta fase.
