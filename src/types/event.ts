/**
 * Evento o presentación.
 *
 * No se separan estructuras para eventos futuros y pasados: se usa una sola
 * interfaz y la distinción se hace por la fecha (`date`) al consumir los datos.
 */
export interface Event {
  id: string;
  name: string;
  /** Fecha en formato ISO 8601 (p. ej. '2026-09-15'). */
  date: string;
  city: string;
  /** Lugar o recinto del evento. */
  venue: string;
  description: string;
  /** Imagen del evento (opcional). */
  image?: string;
  /** URL con más información o entradas (opcional). */
  url?: string;
}
