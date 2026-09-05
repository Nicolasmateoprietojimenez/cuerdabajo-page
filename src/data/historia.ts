/** Reel de la "línea de tiempo TikTok": un evento con su video de YouTube. */
export interface Reel {
  id: string; // ID de YouTube
  title: string; // nombre del evento (va en el lugar del @usuario)
  date: string;
  desc: string;
  song: string;
  likes: string;
  comments: string;
  saves: string;
  shares: string;
  vertical?: boolean; // true para Shorts (9:16)
}

export const reels: Reel[] = [
  {
    id: 'f81I3x0BKH4', title: 'Debut · Comuna Minga', date: '06 Dic 2022',
    desc: 'Aquí arrancó todo. El colectivo juvenil de Soacha nos abrió las puertas y salimos a tocar para la gente. 🌻',
    song: 'Pájaro Amarillo', likes: '2.4k', comments: '128', saves: '512', shares: '96',
  },
  {
    id: 'UJvBnxgmWd8', title: 'Presentación Prado Verde', date: '2023',
    desc: 'Otra tarima, más público y las mismas ganas de sonar. Poquito a poco.',
    song: 'En vivo', likes: '1.1k', comments: '64', saves: '210', shares: '47',
  },
  {
    id: 'OIymNUeuJIA', title: 'Festival Típica Mi Garulla', date: '20 Ago 2023',
    desc: 'La cucharita pa’ toda la gente. Uno de los festivales que nos hizo crecer.',
    song: 'La Cucharita', likes: '3.2k', comments: '210', saves: '640', shares: '180',
  },
  {
    id: 'AicHOLA_Le8', title: 'Soacha Vive la Música', date: '01 Dic 2024',
    desc: 'Haciendo parte del movimiento cultural de nuestra ciudad. Gracias Soacha. 🧡',
    song: 'En vivo', likes: '1.8k', comments: '96', saves: '300', shares: '74',
  },
  {
    id: 'PAj2re49yek', title: 'Festival Sol y Luna', date: '06 Dic 2024',
    desc: 'Las Diabluras para prender la noche. De las que no se olvidan.',
    song: 'Las Diabluras', likes: '2.7k', comments: '175', saves: '560', shares: '132',
  },
  {
    id: 'ftHTzbktJ00', title: 'Alumbrado Soacha 2024', date: '13 Dic 2024',
    desc: 'Teloneros de Los Hispanos en la inauguración del alumbrado navideño. ¡Qué escenario!',
    song: 'En vivo · Los Hispanos', likes: '4.5k', comments: '320', saves: '1.2k', shares: '260',
  },
  {
    id: 'NfaBPCoDAN4', title: 'Hogar Geriátrico La Merced', date: '2026', vertical: true,
    desc: 'Fuimos a cantarles a los abuelos de La Merced. De los días que más se quedan en el corazón.',
    song: 'Jornada La Merced', likes: '5.1k', comments: '402', saves: '1.4k', shares: '300',
  },
  {
    id: '6lRBwbI8AqU', title: 'Unidos por Colombia', date: '2025',
    desc: 'Jornada artística para recoger donaciones por el Chocó y los territorios afectados.',
    song: 'Unidos por Colombia', likes: '3.9k', comments: '288', saves: '900', shares: '240',
  },
  {
    id: 'LEIstSS2KMg', title: 'Cierre Mes de la Juventud', date: '21 Ago 2026',
    desc: 'Cerramos ante 6.000 jóvenes en el Estadio Municipal. La carranga también es identidad juvenil.',
    song: 'En vivo', likes: '6.8k', comments: '540', saves: '2.1k', shares: '410',
  },
];
