/**
 * Navigation and routing constants
 */

import type { FeatureItem, NavigationItem } from '@/types/global';

// Main navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Início',
    href: '/',
    external: false,
  },
  {
    id: 'services',
    label: 'Serviços',
    href: '/#servicos',
    external: false,
  },
  {
    id: 'gallery',
    label: 'Galeria',
    href: '/#galeria',
    external: false,
  },
  {
    id: 'location',
    label: 'Localização',
    href: '/como-chegar',
    external: false,
  },
  {
    id: 'booking',
    label: 'Agendamento',
    href: '/agendamento',
    external: false,
  },
  {
    id: 'partnerships',
    label: 'Parcerias',
    href: '/parcerias',
    external: false,
  },
] as const;

// Footer navigation sections
export const FOOTER_NAVIGATION = {
  services: [
    { label: 'Eventos', href: '/#eventos' },
    { label: 'Hospedagem', href: '/#hospedagem' },
    { label: 'Restaurante', href: '/#restaurante' },
    { label: 'Atividades', href: '/#atividades' },
  ],
  info: [
    { label: 'Sobre Nós', href: '/#sobre' },
    { label: 'Como Chegar', href: '/como-chegar' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
  ],
  contact: [
    { label: 'Fale Conosco', href: '/agendamento' },
    { label: 'Parcerias', href: '/parcerias' },
    { label: 'WhatsApp', href: '#', external: true },
    { label: 'Instagram', href: 'https://www.instagram.com/sitionossolugar/', external: true },
  ],
} as const;

// Feature highlights for hero section
export const FEATURE_HIGHLIGHTS: FeatureItem[] = [
  {
    id: 'events',
    title: 'Estrutura completa para eventos',
    description: 'Espaços versáteis para casamentos, aniversários e eventos corporativos',
    icon: 'Calendar',
    highlighted: true,
  },
  {
    id: 'accommodation',
    title: 'Hospedagem confortável',
    description: 'Acomodações aconchegantes em meio à natureza',
    icon: 'Hotel',
    highlighted: true,
  },
  {
    id: 'restaurant',
    title: 'Restaurante completo',
    description: 'Gastronomia regional e internacional com ingredientes frescos',
    icon: 'Utensils',
    highlighted: true,
  },
] as const;

// Breadcrumb configurations
export const BREADCRUMB_CONFIG = {
  separator: '/',
  showHome: true,
  maxItems: 4,
} as const;

// Page metadata
export const PAGE_METADATA = {
  home: {
    title: 'Sítio Nosso Lugar - Eventos e Hospedagem em Meio à Natureza',
    description:
      'Um refúgio natural perfeito para seus momentos mais especiais, onde a natureza e o conforto se encontram para criar experiências inesquecíveis.',
    keywords: 'sítio, eventos, hospedagem, natureza, casamento, aniversário, Pará',
  },
  agendamento: {
    title: 'Agendamento - Sítio Nosso Lugar',
    description:
      'Agende seu evento ou hospedagem no Sítio Nosso Lugar. Formulário simples e atendimento personalizado.',
    keywords: 'agendamento, reserva, evento, hospedagem',
  },
  parcerias: {
    title: 'Parcerias - Sítio Nosso Lugar',
    description: 'Estabeleça parcerias conosco. Oportunidades para empresas e influenciadores.',
    keywords: 'parcerias, colaboração, empresa, influenciador',
  },
  comoChegar: {
    title: 'Como Chegar - Sítio Nosso Lugar',
    description: 'Localização e instruções de como chegar ao Sítio Nosso Lugar.',
    keywords: 'localização, como chegar, endereço, mapa',
  },
} as const;
