/**
 * Plataformas sociales/de streaming soportadas.
 * Para agregar una nueva plataforma, basta con añadir su clave a esta unión.
 */
export type SocialPlatform =
  'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'spotify' | 'website';

/** Enlace a un perfil o página en una red social o plataforma. */
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  /** Etiqueta visible opcional (por defecto puede derivarse de `platform`). */
  label?: string;
}
