/**
 * Global constants used throughout the application
 */

// Application metadata
export const APP_CONFIG = {
  name: 'Sítio Nosso Lugar',
  shortName: 'Sítio Nosso Lugar',
  description: 'Eventos e hospedagem em meio à natureza',
  version: '1.0.0',
  author: 'In Silico Tecnologia',
  url: 'https://sitionossolugar.com.br',
  locale: 'pt-BR',
  timezone: 'America/Sao_Paulo',
} as const;

// Environment configuration
export const ENV = {
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',
  isTest: import.meta.env.MODE === 'test',
} as const;

// API configuration
export const API_CONFIG = {
  timeout: 10000, // 10 seconds
  retries: 3,
  baseURL: import.meta.env.VITE_API_URL || '',
  version: 'v1',
} as const;

// Form configuration
export const FORM_CONFIG = {
  debounceMs: 300,
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp'] as const,
  allowedDocumentTypes: ['application/pdf', 'application/msword'] as const,
} as const;

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoint configuration
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  xl: 1536,
} as const;

// Z-index layers
export const Z_INDEX = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Color palette
export const COLORS = {
  primary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
} as const;

// Event types
export const EVENT_TYPES = {
  CASAMENTO: 'casamento',
  ANIVERSARIO: 'aniversario',
  CONFRATERNIZACAO: 'confraternizacao',
  EVENTO_CORPORATIVO: 'evento-corporativo',
  ENSAIO_FOTOGRAFICO: 'ensaio-fotografico',
  OUTROS: 'outros',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'sitio-theme',
  language: 'sitio-language',
  formDraft: 'sitio-form-draft',
  userPreferences: 'sitio-user-preferences',
  analyticsConsent: 'sitio-analytics-consent',
} as const;

// Date and time constants
export const DATE_CONFIG = {
  minReservationDays: 7, // Minimum days in advance for reservation
  maxReservationDays: 365, // Maximum days in advance for reservation
  businessHoursStart: '08:00',
  businessHoursEnd: '18:00',
  workingDays: [1, 2, 3, 4, 5, 6, 7], // Monday to Sunday
} as const;

// Validation constants
export const VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  phone: {
    minLength: 10,
    maxLength: 15,
  },
  email: {
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
  guests: {
    min: 1,
    max: 500,
  },
} as const;

// SEO constants
export const SEO_CONFIG = {
  titleTemplate: '%s | Sítio Nosso Lugar',
  defaultTitle: 'Sítio Nosso Lugar - Eventos e Hospedagem em Meio à Natureza',
  defaultDescription:
    'Um refúgio natural perfeito para seus momentos mais especiais, onde a natureza e o conforto se encontram para criar experiências inesquecíveis.',
  defaultKeywords: [
    'sítio',
    'eventos',
    'hospedagem',
    'natureza',
    'casamento',
    'aniversário',
    'Pará',
    'Brasil',
  ],
  ogImageDefault: '/og-image.jpg',
  twitterHandle: '@sitionossolugar',
} as const;

// Social media platforms
export const SOCIAL_PLATFORMS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  network: 'Erro de conexão. Verifique sua internet.',
  server: 'Erro no servidor. Tente novamente mais tarde.',
  validation: 'Dados inválidos. Verifique os campos.',
  notFound: 'Página não encontrada.',
  unauthorized: 'Acesso não autorizado.',
  timeout: 'Tempo limite excedido. Tente novamente.',
  generic: 'Ocorreu um erro inesperado.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Formulário enviado com sucesso!',
  reservationSent: 'Solicitação de reserva enviada!',
  partnershipSent: 'Proposta de parceria enviada!',
  contactSent: 'Mensagem enviada com sucesso!',
} as const;
