import type { GalleryImage } from '../types';

/**
 * Galería de fotografías de Cuerdabajo — "Momentos que quedan".
 * TEMPORAL: aún no hay set fotográfico final; se usa la foto de portada como
 * placeholder en todos los ítems. Reemplazar `image` por las fotos reales.
 */
export const gallery: GalleryImage[] = [
  {
    id: 'photo-1',
    image: '/images/hero.jpg', // TEMPORAL
    alt: 'Cuerdabajo caminando entre las montañas al atardecer',
    category: 'agrupacion',
  },
  {
    id: 'photo-2',
    image: '/images/hero.jpg', // TEMPORAL
    alt: 'La agrupación de camino a una presentación',
    category: 'conciertos',
  },
  {
    id: 'photo-3',
    image: '/images/hero.jpg', // TEMPORAL
    alt: 'Cuerdabajo en el campo colombiano',
    category: 'agrupacion',
  },
  {
    id: 'photo-4',
    image: '/images/hero.jpg', // TEMPORAL
    alt: 'Integrantes de Cuerdabajo entre cultivos de maíz',
    category: 'backstage',
  },
];
