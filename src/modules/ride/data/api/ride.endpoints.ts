const BASE = '/rides';

export const RIDE_ENDPOINTS = {
  LIST: BASE,
  CREATE: BASE,
  UPDATE: (id: number) => `${BASE}/${id}`,
  DELETE: (id: number) => `${BASE}/${id}`,
} as const;
