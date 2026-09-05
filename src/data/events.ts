import type { Event } from '../types';

/**
 * Eventos y presentaciones de Cuerdabajo.
 *
 * Una sola colección para eventos futuros y pasados: la distinción se hace por
 * la fecha (`date`) al consumir los datos, sin duplicar estructuras.
 *
 * Contenido tomado del mockup oficial. TEMPORAL: fechas/lugares ilustrativos
 * (año fijado a 2027 para que figuren como próximos); confirmar datos reales.
 */
export const events: Event[] = [
  {
    id: 'festival-vive-la-musica',
    name: 'Festival Vive la Música',
    date: '2027-05-28',
    city: 'Soacha, Cundinamarca',
    venue: 'Por confirmar', // TEMPORAL
    description: 'Nos vemos en el camino.',
  },
  {
    id: 'fiestas-del-maiz',
    name: 'Fiestas del Maíz',
    date: '2027-06-12',
    city: 'Fusagasugá, Cundinamarca',
    venue: 'Por confirmar', // TEMPORAL
    description: 'Nos vemos en el camino.',
  },
  {
    id: 'la-x-zona',
    name: 'La X Zona',
    date: '2027-06-25',
    city: 'Bogotá, Cundinamarca',
    venue: 'Por confirmar', // TEMPORAL
    description: 'Nos vemos en el camino.',
  },
];
