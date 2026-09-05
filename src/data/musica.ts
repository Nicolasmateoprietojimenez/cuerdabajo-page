/** Muro de música: videos de YouTube y temas de Spotify (URLs reales). */
export interface YTVideo {
  id: string;
  title: string;
  tag: string;
  start?: number;
  featured?: boolean;
}

export const youtubeVideos: YTVideo[] = [
  { id: 'aetUo1L_GEc', title: 'Una Copa +', tag: 'Video oficial', featured: true },
  { id: '3Icep_WT4Lw', title: 'Baúl de Recuerdos', tag: 'Carranga × Merengue' },
  { id: 'YkfuYhCjx2Q', title: 'Bonita Hora de Avisar', tag: 'ft. Rolan Serrato' },
  { id: 'ftHTzbktJ00', title: 'Apertura a Los Hispanos', tag: 'En vivo · Soacha 2024', start: 1763 },
];

/** IDs de temas en Spotify (para los reproductores embebidos). */
export const spotifyTracks: string[] = [
  '2ZMOBMbM6EkNfa6iTa5jyY',
  '6uQYCE8kraHq0wNE20Usdf',
];

/** Perfiles oficiales. */
export const spotifyArtist = 'https://open.spotify.com/artist/6t5wGXkuQkaF7qKW3BdFfY';
export const youtubeProfile = 'https://www.youtube.com/@agrupacioncuerdabajo';
