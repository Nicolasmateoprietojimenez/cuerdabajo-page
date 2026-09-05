import type { NavLink } from '../types';

/** Navegación principal (rutas del sitio multi-página). */
export const mainNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Música', href: '/musica' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
];

/** CTA de contratación (destacada en el header). */
export const cta: NavLink = { label: 'Contacto', href: '/contacto' };
