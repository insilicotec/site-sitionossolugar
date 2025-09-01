/**
 * Image asset constants and configurations
 * Centralized management of all images used in the application
 */

import type { ImageAsset } from '@/types/global';

// Logo and branding assets
export const LOGO_ASSETS = {
  main: '/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png',
  favicon: '/favicon.ico',
  ogImage: '/og-image.jpg',
} as const;

// Gallery images - organized by category
export const GALLERY_IMAGES: ImageAsset[] = [
  {
    id: 1,
    src: '/lovable-uploads/57f7a25d-1204-4c33-9a72-f8f9cd835e02.png',
    alt: 'Evento organizado com mesas e cadeiras douradas em ambiente natural',
    category: 'gallery',
  },
  {
    id: 2,
    src: '/lovable-uploads/a6c3f3e5-afad-4cdd-ba30-4af367d78ade.png',
    alt: 'Área de lazer noturna com mesas e iluminação especial',
    category: 'gallery',
  },
  {
    id: 3,
    src: '/lovable-uploads/1ceb5176-485a-4c1d-b418-3449ff8518ac.png',
    alt: 'Família em momento especial com roupões brancos',
    category: 'gallery',
  },
  {
    id: 4,
    src: '/lovable-uploads/3b453679-06d7-4e57-89b2-e348b049a975.png',
    alt: 'Quarto com camas em tons rosados',
    category: 'gallery',
  },
  {
    id: 5,
    src: '/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png',
    alt: 'Salão de festas com mesas douradas decoradas para evento',
    category: 'gallery',
  },
  {
    id: 6,
    src: '/lovable-uploads/4a1d4b9c-1ea8-418a-8a24-ab78a8f64d53.png',
    alt: 'Piscina com mãe e filha brincando com bola vermelha',
    category: 'gallery',
  },
  {
    id: 7,
    src: '/src/img/mulher-vestido-azul-trilha-ecologica.jpg',
    alt: 'Mulher com vestido azul em trilha natural de madeira',
    category: 'gallery',
  },
  {
    id: 8,
    src: '/src/img/mesas-ao-ar-livre.jpg',
    alt: 'Área de evento com decoração de casamento ao ar livre',
    category: 'gallery',
  },
  {
    id: 9,
    src: '/src/img/piscina-vista.jpg',
    alt: 'Vista externa da estrutura principal do Sítio com áreas verdes',
    category: 'gallery',
  },
  {
    id: 10,
    src: '/src/img/panelas-fogao-barro.jpg',
    alt: 'Cozinha exterior com panelas de barro e vista para a natureza',
    category: 'gallery',
  },
];

// Hero section background images
export const HERO_IMAGES = {
  background: '/images/hero-bg.jpg',
  video: '/video-optimized.mp4',
  videoThumbnail: '/images/hero-bg.jpg',
} as const;

// Feature icons and illustrations
export const FEATURE_IMAGES = {
  events: '/lovable-uploads/57f7a25d-1204-4c33-9a72-f8f9cd835e02.png',
  accommodation: '/lovable-uploads/3b453679-06d7-4e57-89b2-e348b049a975.png',
  restaurant: '/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png',
  nature: '/src/img/mulher-vestido-azul-trilha-ecologica.jpg',
} as const;

// Image optimization settings
export const IMAGE_OPTIMIZATION = {
  quality: 80,
  formats: ['webp', 'avif', 'jpg'] as const,
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1200,
    xl: 1920,
  },
} as const;

// Placeholder configurations
export const PLACEHOLDER_CONFIG = {
  blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bvHHVQZVTo9 Radioss',
  color: '#f3f4f6',
} as const;

// Image loading priorities
export const IMAGE_PRIORITIES = {
  hero: 'high' as const,
  gallery: 'low' as const,
  features: 'medium' as const,
} as const;
