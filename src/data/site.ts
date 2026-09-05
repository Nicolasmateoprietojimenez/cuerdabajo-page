import type { SiteConfig } from '../types';

/**
 * Información global del sitio.
 * TEMPORAL: email y algunos textos son placeholders; reemplazar por los
 * definitivos de Cuerdabajo.
 */
export const site: SiteConfig = {
  name: 'Cuerdabajo',
  tagline: 'Música que nos une', // oficial (guía de marca)
  shortDescription: 'Agrupación de música carranguera de Soacha, Colombia.',
  description:
    'Carranga, tradición y campo. Somos historias que suenan desde Soacha para el mundo.',
  city: 'Soacha, Colombia',
  url: 'https://cuerdabajo.com', // TEMPORAL: dominio por confirmar
  locale: 'es_CO',
  // TEMPORAL: imagen social por definir. Colocar el archivo en public/og-image.jpg
  ogImage: '/og-image.jpg',
  // Video que aparece al pulsar el botón de play del Hero.
  // https://youtu.be/ftHTzbktJ00  ->  arranca en 29:42 (29*60+42 = 1782 s)
  heroVideo: {
    youtubeId: 'ftHTzbktJ00',
    start: 1782,
  },
  contact: {
    whatsapp: '+573135651518', // WhatsApp de contrataciones
    email: 'grupocuerdabajo@gmail.com', // TEMPORAL: correo por confirmar
  },
};
