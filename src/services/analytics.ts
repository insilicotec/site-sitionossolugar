/**
 * Analytics service for tracking user interactions and events
 */

import type { AnalyticsEvent } from '@/types/api';

/**
 * Analytics Service Class
 * Handles event tracking and analytics
 */
export class AnalyticsService {
  private static isEnabled =
    typeof window !== 'undefined' && !window.location.hostname.includes('localhost');

  /**
   * Track a custom event
   */
  static trackEvent(event: AnalyticsEvent): void {
    if (!this.isEnabled) return;

    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter: event.userId || 'anonymous',
      });
    }

    // Console log for development
    if (import.meta.env.MODE === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Track page views
   */
  static trackPageView(pagePath: string, pageTitle?: string): void {
    if (!this.isEnabled) return;

    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }

    this.trackEvent({
      category: 'Navigation',
      action: 'page_view',
      label: pagePath,
    });
  }

  /**
   * Track form submissions
   */
  static trackFormSubmission(
    formType: 'reservation' | 'partnership' | 'contact',
    success: boolean
  ): void {
    this.trackEvent({
      category: 'Form',
      action: success ? 'submit_success' : 'submit_error',
      label: formType,
      value: success ? 1 : 0,
    });
  }

  /**
   * Track button clicks
   */
  static trackButtonClick(buttonName: string, location: string): void {
    this.trackEvent({
      category: 'Interaction',
      action: 'button_click',
      label: `${buttonName}_${location}`,
    });
  }

  /**
   * Track WhatsApp interactions
   */
  static trackWhatsAppClick(messageType: 'general' | 'reservation' | 'partnership'): void {
    this.trackEvent({
      category: 'Communication',
      action: 'whatsapp_click',
      label: messageType,
    });
  }

  /**
   * Track gallery interactions
   */
  static trackGalleryInteraction(action: 'view' | 'expand' | 'navigate', imageId?: string): void {
    this.trackEvent({
      category: 'Gallery',
      action: action,
      label: imageId || 'unknown',
    });
  }

  /**
   * Track scroll depth
   */
  static trackScrollDepth(percentage: number): void {
    if (percentage % 25 === 0) {
      // Track at 25%, 50%, 75%, 100%
      this.trackEvent({
        category: 'Engagement',
        action: 'scroll_depth',
        label: `${percentage}%`,
        value: percentage,
      });
    }
  }

  /**
   * Track video interactions
   */
  static trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoId?: string): void {
    this.trackEvent({
      category: 'Video',
      action: action,
      label: videoId || 'hero_video',
    });
  }

  /**
   * Track performance metrics
   */
  static trackPerformance(): void {
    if (!this.isEnabled || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded =
        navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

      this.trackEvent({
        category: 'Performance',
        action: 'page_load_time',
        value: Math.round(loadTime),
      });

      this.trackEvent({
        category: 'Performance',
        action: 'dom_content_loaded',
        value: Math.round(domContentLoaded),
      });
    }
  }

  /**
   * Initialize analytics
   */
  static initialize(): void {
    if (!this.isEnabled) return;

    // Track performance metrics when page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.trackPerformance();
      }, 1000);
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        this.trackScrollDepth(scrollPercent);
      }
    });
  }
}
