/**
 * Barrel de tipos compartidos.
 * Permite importar desde un único punto: `import type { Member, Event } from '@types';`
 */
export type { SiteConfig, ContactInfo } from './site';
export type { Member } from './member';
export type { Song, ReleaseType, StreamingLink } from './song';
export type { Video, VideoPlatform } from './video';
export type { Event } from './event';
export type { GalleryImage, GalleryCategory } from './gallery-image';
export type { SocialLink, SocialPlatform } from './social-link';
export type { Statistic } from './statistic';
export type { NavLink } from './navigation';
