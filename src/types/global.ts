/**
 * Global type definitions for the Sítio Nosso Lugar application
 */

export interface ImageAsset {
  id: string | number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
  category?: 'gallery' | 'hero' | 'logo' | 'feature';
}

export interface VideoAsset {
  id: string | number;
  src: string;
  title: string;
  thumbnail?: string;
  duration?: number;
  category?: 'hero' | 'gallery' | 'testimonial';
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email?: string;
  address: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapUrl?: string;
}

// Common UI Props
export interface BaseComponentProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Form submission states
export type FormSubmissionState = 'idle' | 'loading' | 'success' | 'error';

// Event types for analytics
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
