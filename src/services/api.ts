/**
 * API service for handling HTTP requests
 */

import type { ApiError, ApiRequestConfig, ApiResponse, FormSubmissionResponse } from '@/types/api';

/**
 * API Service Class
 * Handles all HTTP requests and API interactions
 */
export class ApiService {
  private static readonly baseURL = import.meta.env.VITE_API_URL || '';
  private static readonly timeout = 10000; // 10 seconds

  /**
   * Makes an HTTP request
   */
  private static async request<T>(config: ApiRequestConfig): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseURL}${config.url}`, {
        method: config.method,
        headers: {
          'Content-Type': 'application/json',
          ...config.headers,
        },
        body: config.data ? JSON.stringify(config.data) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        success: true,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      clearTimeout(timeoutId);

      const apiError: ApiError = {
        status: error instanceof Error ? 0 : 500,
        message: error instanceof Error ? error.message : 'Unknown error',
        details: error,
        timestamp: new Date().toISOString(),
      };

      throw apiError;
    }
  }

  /**
   * GET request
   */
  static async get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const searchParams = params ? new URLSearchParams(params).toString() : '';
    const fullUrl = searchParams ? `${url}?${searchParams}` : url;

    return this.request<T>({
      method: 'GET',
      url: fullUrl,
    });
  }

  /**
   * POST request
   */
  static async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
    });
  }

  /**
   * PUT request
   */
  static async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
    });
  }

  /**
   * DELETE request
   */
  static async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
    });
  }

  /**
   * Submit form data
   */
  static async submitForm(formType: string, formData: any): Promise<FormSubmissionResponse> {
    try {
      const response = await this.post<FormSubmissionResponse>(`/forms/${formType}`, formData);
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao enviar formulário',
        errors: [
          {
            field: 'general',
            message: 'Erro interno do servidor. Tente novamente.',
          },
        ],
      };
    }
  }

  /**
   * Health check
   */
  static async healthCheck(): Promise<boolean> {
    try {
      await this.get('/health');
      return true;
    } catch {
      return false;
    }
  }
}
