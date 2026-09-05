/** Plataforma donde está alojado el video. */
export type VideoPlatform = 'youtube' | 'vimeo' | 'facebook' | 'tiktok';

/** Video de la agrupación. */
export interface Video {
  id: string;
  title: string;
  description: string;
  /** Ruta o URL de la miniatura. */
  thumbnail: string;
  url: string;
  platform: VideoPlatform;
}
