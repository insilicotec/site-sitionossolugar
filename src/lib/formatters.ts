/**
 * Formatting utilities
 * Centralized formatting functions for consistent data display
 */

import { format, isValid, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Date and Time Formatting
 */
export class DateFormatter {
  /**
   * Format date to Brazilian format (DD/MM/YYYY)
   */
  static toBrazilianDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;

      if (!isValid(dateObj)) {
        throw new Error('Invalid date');
      }

      return format(dateObj, 'dd/MM/yyyy', { locale: ptBR });
    } catch {
      return 'Data inválida';
    }
  }

  /**
   * Format date with day of week (Ex: Segunda, 15/03/2024)
   */
  static toFullDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;

      if (!isValid(dateObj)) {
        throw new Error('Invalid date');
      }

      return format(dateObj, 'EEEE, dd/MM/yyyy', { locale: ptBR });
    } catch {
      return 'Data inválida';
    }
  }

  /**
   * Format time to Brazilian format (HH:MM)
   */
  static toTime(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;

      if (!isValid(dateObj)) {
        throw new Error('Invalid date');
      }

      return format(dateObj, 'HH:mm', { locale: ptBR });
    } catch {
      return 'Horário inválido';
    }
  }

  /**
   * Format relative time (Ex: há 2 horas)
   */
  static toRelative(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;

      if (!isValid(dateObj)) {
        throw new Error('Invalid date');
      }

      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

      if (diffInSeconds < 60) return 'agora';
      if (diffInSeconds < 3600) return `há ${Math.floor(diffInSeconds / 60)} minutos`;
      if (diffInSeconds < 86400) return `há ${Math.floor(diffInSeconds / 3600)} horas`;
      if (diffInSeconds < 604800) return `há ${Math.floor(diffInSeconds / 86400)} dias`;

      return this.toBrazilianDate(dateObj);
    } catch {
      return 'Data inválida';
    }
  }
}

/**
 * Number and Currency Formatting
 */
export class NumberFormatter {
  /**
   * Format number with Brazilian locale
   */
  static toLocale(value: number): string {
    return value.toLocaleString('pt-BR');
  }

  /**
   * Format to Brazilian currency (R$)
   */
  static toCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  /**
   * Format percentage
   */
  static toPercentage(value: number, decimals: number = 1): string {
    return `${(value * 100).toFixed(decimals)}%`;
  }

  /**
   * Format large numbers (1K, 1M, etc.)
   */
  static toCompact(value: number): string {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  }
}

/**
 * Text Formatting
 */
export class TextFormatter {
  /**
   * Capitalize first letter
   */
  static capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  /**
   * Convert to title case
   */
  static toTitleCase(text: string): string {
    return text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  /**
   * Truncate text with ellipsis
   */
  static truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trimEnd() + '...';
  }

  /**
   * Remove accents and special characters
   */
  static removeAccents(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9\s]/g, '');
  }

  /**
   * Generate slug from text
   */
  static toSlug(text: string): string {
    return this.removeAccents(text).toLowerCase().trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  /**
   * Format phone number
   */
  static formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');

    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return phone;
  }

  /**
   * Format CNPJ
   */
  static formatCNPJ(cnpj: string): string {
    const cleaned = cnpj.replace(/\D/g, '');

    if (cleaned.length === 14) {
      return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return cnpj;
  }

  /**
   * Format CPF
   */
  static formatCPF(cpf: string): string {
    const cleaned = cpf.replace(/\D/g, '');

    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    return cpf;
  }
}

/**
 * URL and Path Formatting
 */
export class UrlFormatter {
  /**
   * Ensure URL has protocol
   */
  static addProtocol(url: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  }

  /**
   * Format Instagram handle
   */
  static formatInstagram(handle: string): string {
    const cleaned = handle.replace('@', '');
    return `@${cleaned}`;
  }

  /**
   * Generate Google Maps URL
   */
  static toGoogleMaps(address: string): string {
    const encoded = encodeURIComponent(address);
    return `https://maps.google.com/maps?q=${encoded}`;
  }

  /**
   * Generate WhatsApp URL
   */
  static toWhatsApp(phone: string, message?: string): string {
    const cleanPhone = phone.replace(/\D/g, '');
    const encoded = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${cleanPhone}${message ? `?text=${encoded}` : ''}`;
  }
}

/**
 * File Size Formatting
 */
export class FileFormatter {
  /**
   * Format file size in bytes to human readable
   */
  static formatSize(bytes: number): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];

    if (bytes === 0) return '0 Bytes';

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = bytes / Math.pow(1024, i);

    return `${Math.round(size * 100) / 100} ${sizes[i]}`;
  }
}
