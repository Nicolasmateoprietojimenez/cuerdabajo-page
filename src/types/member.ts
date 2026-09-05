import type { SocialLink } from './social-link';

/** Integrante de la agrupación. */
export interface Member {
  id: string;
  name: string;
  instrument: string;
  image: string;
  description: string;
  /** Redes sociales personales (opcional). */
  social?: SocialLink[];
}
