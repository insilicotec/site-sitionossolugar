/**
 * API-related type definitions
 */

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// API Request configuration
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

// Generic API Response
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
  timestamp?: string;
}

// Error response
export interface ApiError {
  status: number;
  message: string;
  details?: any;
  timestamp: string;
}

// Pagination
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    current: number;
    total: number;
    perPage: number;
    totalItems: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// Supabase specific types
export interface SupabaseResponse<T> {
  data: T | null;
  error: any | null;
}

// WhatsApp API types
export interface WhatsAppMessage {
  phone: string;
  message: string;
  parseMode?: 'markdown' | 'html';
}

export interface WhatsAppResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Form submission API types
export interface FormSubmissionResponse {
  success: boolean;
  submissionId?: string;
  message: string;
  redirectUrl?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// File upload types
export interface FileUploadResponse {
  success: boolean;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  error?: string;
}

// Analytics API types
export interface AnalyticsEvent {
  event?: string;
  action: string;
  category: string;
  label?: string;
  value?: number;
  userId?: string;
  sessionId?: string;
  timestamp?: Date;
}

// Global gtag function declaration
declare global {
  function gtag(...args: any[]): void;
}

export interface AnalyticsResponse {
  tracked: boolean;
  eventId?: string;
  error?: string;
}
