/** Categorías disponibles para clasificar las fotografías. */
export type GalleryCategory = 'conciertos' | 'eventos' | 'backstage' | 'agrupacion';

/** Fotografía de la galería. */
export interface GalleryImage {
  id: string;
  /** Ruta o URL de la imagen. */
  image: string;
  /** Texto alternativo para accesibilidad. */
  alt: string;
  title?: string;
  category?: GalleryCategory;
}
