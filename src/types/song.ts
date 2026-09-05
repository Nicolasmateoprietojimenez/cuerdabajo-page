/** Tipo de lanzamiento musical. */
export type ReleaseType = 'single' | 'ep' | 'album';

/** Enlace a una plataforma de streaming donde escuchar la canción. */
export interface StreamingLink {
  /** Nombre de la plataforma, p. ej. 'Spotify', 'YouTube Music', 'Apple Music'. */
  platform: string;
  url: string;
}

/** Canción o lanzamiento de la agrupación. */
export interface Song {
  id: string;
  title: string;
  description: string;
  /** Ruta o URL de la portada. */
  cover: string;
  year: number;
  releaseType: ReleaseType;
  /** Duración legible, p. ej. '3:24' (opcional). */
  duration?: string;
  /** Enlaces a las plataformas donde está disponible. */
  platforms: StreamingLink[];
}
