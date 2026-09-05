import type { Video } from '../types';

/**
 * Videos de Cuerdabajo (títulos tomados del mockup oficial).
 * TEMPORAL: las miniaturas y URLs son placeholders (se usa la foto de portada
 * como miniatura provisional). Reemplazar por los videos reales de YouTube.
 */
export const videos: Video[] = [
  {
    id: 'baul-de-recuerdos-oficial',
    title: 'Baúl de Recuerdos',
    description: 'Video oficial',
    thumbnail: '/images/hero.jpg', // TEMPORAL
    url: '#', // TEMPORAL
    platform: 'youtube',
  },
  {
    id: 'te-necesito-en-vivo',
    title: 'Te Necesito',
    description: 'En vivo',
    thumbnail: '/images/hero.jpg', // TEMPORAL
    url: '#', // TEMPORAL
    platform: 'youtube',
  },
  {
    id: 'detras-de-cuerdabajo',
    title: 'Detrás de Cuerdabajo',
    description: 'Documental',
    thumbnail: '/images/hero.jpg', // TEMPORAL
    url: '#', // TEMPORAL
    platform: 'youtube',
  },
  {
    id: 'bonita-hora-acustico',
    title: 'Bonita Hora',
    description: 'Sesión acústica',
    thumbnail: '/images/hero.jpg', // TEMPORAL
    url: '#', // TEMPORAL
    platform: 'youtube',
  },
];
