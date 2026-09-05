/** Información de contacto de la agrupación. */
export interface ContactInfo {
  /** Número de WhatsApp en formato internacional (p. ej. '+57...'). */
  whatsapp: string;
  email: string;
}

/** Video de fondo del Hero (YouTube), reproducible desde el CTA. */
export interface HeroVideo {
  /** ID del video de YouTube (p. ej. 'aetUo1L_GEc'). */
  youtubeId: string;
  /** Segundo de inicio de la reproducción (opcional). */
  start?: number;
}

/** Configuración e información global del sitio. */
export interface SiteConfig {
  name: string;
  /** Eslogan oficial de la agrupación (p. ej. para títulos y branding). */
  tagline: string;
  /** Descripción corta (una línea), útil para meta tags y encabezados. */
  shortDescription: string;
  /** Descripción larga de la agrupación. */
  description: string;
  city: string;
  /** URL canónica del sitio (p. ej. 'https://cuerdabajo.com'). */
  url: string;
  /** Locale para Open Graph (p. ej. 'es_CO'). */
  locale: string;
  /** Ruta de la imagen social por defecto (Open Graph / Twitter), opcional. */
  ogImage?: string;
  /** Video del Hero reproducible desde el CTA "Escuchar ahora" (opcional). */
  heroVideo?: HeroVideo;
  contact: ContactInfo;
}
