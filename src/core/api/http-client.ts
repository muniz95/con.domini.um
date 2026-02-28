import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
}

class HttpClient {
  private client: AxiosInstance;

  constructor(config: HttpClientConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const message = error.response?.data?.message || error.message;
        console.error('API Error:', message);
        throw new Error(message);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get<T, T>(url, config);
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.client.post<T, T>(url, data, config);
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.client.put<T, T>(url, data, config);
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.client.patch<T, T>(url, data, config);
  }

  async delete<T = void>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.delete<T, T>(url, config);
  }
}

export const httpClient = new HttpClient({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000/api/v1',
});
