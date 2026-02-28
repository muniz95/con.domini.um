import { httpClient } from '@/core/api/http-client';
import { apiConfig } from '@/core/config/api.config';

const mockRegistry = new Map<string, unknown>();

export function registerMock(endpoint: string, mockData: unknown) {
  mockRegistry.set(endpoint, mockData);
}

export function setupMockInterceptor() {
  if (!apiConfig.useMockData) return;

  httpClient.interceptors.response.use((response) => {
    const url = response.config.url;

    for (const [endpoint, mockData] of mockRegistry) {
      if (url?.includes(endpoint)) {
        response.data = mockData;
        break;
      }
    }

    return response;
  });
}
