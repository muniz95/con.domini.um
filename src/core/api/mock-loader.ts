import { apiConfig } from '@/core/config/api.config';

export async function loadMocks() {
  if (!apiConfig.useMockData) return;

  // Use Vite's glob import to dynamically load all mock files
  const mockModules = import.meta.glob('@/modules/*/data/api/*.mock.ts', {
    eager: true,
  });

  for (const module of Object.values(mockModules)) {
    // Mock files auto-register themselves on import
    console.log('Mock module loaded:', module);
  }
}
