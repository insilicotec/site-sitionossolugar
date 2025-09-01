/**
 * Contact information and communication constants
 */

import type { ContactInfo } from '@/types/global';

// Main contact information
export const CONTACT_INFO: ContactInfo = {
  phone: '+55 91 8473-1385',
  whatsapp: '559184731385',
  email: 'contato@sitionossolugar.com.br',
  address: 'Localização exclusiva em meio à natureza',
  socialMedia: {
    instagram: 'https://www.instagram.com/sitionossolugar/',
    facebook: '',
    youtube: '',
  },
} as const;

// WhatsApp default messages
export const WHATSAPP_MESSAGES = {
  general: 'Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar.',
  reservation:
    '🌿 *SÍTIO NOSSO LUGAR* 🌟\n\nOlá! Gostaria de fazer uma reserva para um evento especial.\n\n💚 Aguardo contato!',
  partnership: 'Olá! Tenho interesse em estabelecer uma parceria com o Sítio Nosso Lugar.',
  information: 'Olá! Gostaria de mais informações sobre os serviços oferecidos.',
} as const;

// Business hours
export const BUSINESS_HOURS = [
  { day: 'Segunda-feira', open: '08:00', close: '17:00' },
  { day: 'Terça-feira', open: '08:00', close: '17:00' },
  { day: 'Quarta-feira', open: '08:00', close: '17:00' },
  { day: 'Quinta-feira', open: '08:00', close: '17:00' },
  { day: 'Sexta-feira', open: '08:00', close: '17:00' },
  { day: 'Sábado', open: '08:00', close: '18:00' },
  { day: 'Domingo', open: '08:00', close: '17:00' },
] as const;

// Location information
export const LOCATION_INFO = {
  name: 'Sítio Nosso Lugar',
  address: 'Localização privilegiada em meio à natureza',
  coordinates: {
    lat: -1.4558, // Approximate coordinates for Belém region
    lng: -48.4902,
  },
  mapUrl: '', // To be configured with Google Maps embed URL
  directions: 'Fácil acesso por estrada asfaltada',
} as const;

// Emergency and support contacts
export const EMERGENCY_CONTACTS = {
  emergency: '190', // Police
  medical: '192', // SAMU
  fire: '193', // Fire Department
} as const;
