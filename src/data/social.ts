/** Redes oficiales de Cuerdabajo. */
export interface Social {
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube';
  url: string;
  label: string;
}

export const social: Social[] = [
  { platform: 'instagram', url: 'https://www.instagram.com/agrupacion_cuerdabajo/', label: 'Instagram' },
  { platform: 'facebook', url: 'https://www.facebook.com/people/Cuerdabajo/100087781704883/', label: 'Facebook' },
  { platform: 'tiktok', url: 'https://www.tiktok.com/@agrupacioncuerdabajo', label: 'TikTok' },
  { platform: 'youtube', url: 'https://www.youtube.com/@agrupacioncuerdabajo', label: 'YouTube' },
];

/** SVG (currentColor) por plataforma. */
export const socialIcons: Record<string, string> = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8h3.06z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.1 1.6 3.7 3.6 4v2.6c-1.3 0-2.5-.4-3.6-1.1v6.2c0 3.2-2.6 5.8-5.8 5.8S4.4 17.9 4.4 14.7 7 8.9 10.2 8.9c.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3H16z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5a2.8 2.8 0 0 0-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.6.5a2.8 2.8 0 0 0-2 2C1 8.6 1 12 1 12s0 3.4.4 5a2.8 2.8 0 0 0 2 2c1.8.5 8.6.5 8.6.5s6.8 0 8.6-.5a2.8 2.8 0 0 0 2-2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>',
};
