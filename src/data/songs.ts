import type { Song } from '../types';

/**
 * Música de Cuerdabajo (del portafolio oficial).
 * TEMPORAL: pega los enlaces reales de YouTube/Spotify en cada canción y en
 * `musicLinks`. `cover` vacío => portada tipográfica.
 */
export const musicLinks = {
  spotify: '#', // TEMPORAL: perfil de artista en Spotify
  youtube: 'https://youtu.be/ftHTzbktJ00', // video compartido por la banda
  instagram: '#', // TEMPORAL
};

export const songs: Song[] = [
  {
    id: 'una-copa-mas',
    title: 'Una Copa +',
    description: '¡Más de 7.000 reproducciones! Con DALIHA Records.',
    cover: '',
    year: 2025,
    releaseType: 'single',
    duration: '',
    platforms: [
      { platform: 'YouTube', url: '#' }, // TEMPORAL: URL del video
      { platform: 'Spotify', url: '#' }, // TEMPORAL
    ],
  },
  {
    id: 'baul-de-recuerdos',
    title: 'Baúl de Recuerdos',
    description: 'Un viaje por los recuerdos y las raíces. Con DALIHA Records.',
    cover: '',
    year: 2025,
    releaseType: 'single',
    duration: '',
    platforms: [
      { platform: 'YouTube', url: '#' }, // TEMPORAL
      { platform: 'Spotify', url: '#' }, // TEMPORAL
    ],
  },
  {
    id: 'bonita-hora-de-avisar',
    title: 'Bonita Hora de Avisar',
    description: 'Cuerdabajo & Rolan Serrato — EPIC TV Colombia.',
    cover: '',
    year: 2024,
    releaseType: 'single',
    duration: '',
    platforms: [
      { platform: 'YouTube', url: '#' }, // TEMPORAL
    ],
  },
];

export const featuredSong: Song = songs[0];
