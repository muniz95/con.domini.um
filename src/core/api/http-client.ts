import axios, { AxiosInstance } from 'axios';

function createHttpClient(): AxiosInstance {
  const client = axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
    timeout: 10000,
  });

  client.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const message = error.response?.data?.message || error.message;
      console.error('API Error:', message);
      throw new Error(message);
    }
  );

  return client;
}

export const httpClient = createHttpClient();
