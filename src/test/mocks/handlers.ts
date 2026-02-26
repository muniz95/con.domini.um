import { http, HttpResponse } from 'msw';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export const handlers = [
  http.get(`${BASE_URL}/rides`, () => {
    return HttpResponse.json([
      {
        id: 1,
        destiny: 'Curitiba',
        category: 'offer',
        phone: '11999999999',
        town: 'Centro',
        departure: '08:00',
        place: 'Estação Central',
        route: 'Avenida Paraná',
        days: ['Monday', 'Wednesday', 'Friday'],
        date: '2026-02-26T08:00:00Z',
      },
      {
        id: 2,
        destiny: 'Rio de Janeiro',
        category: 'need',
        phone: '21988888888',
        town: 'Zona Sul',
        departure: '09:00',
        place: 'Metrô',
        route: 'Via Dutra',
        days: ['Tuesday', 'Thursday'],
        date: '2026-02-26T09:00:00Z',
      },
    ]);
  }),

  http.post(`${BASE_URL}/rides`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      {
        id: 3,
        ...body,
        date: new Date().toISOString(),
      },
      { status: 201 }
    );
  }),

  http.put(`${BASE_URL}/rides/:id`, async ({ request, params }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: parseInt(params.id as string),
      ...body,
      date: new Date().toISOString(),
    });
  }),

  http.delete(`${BASE_URL}/rides/:id`, () => {
    return HttpResponse.json(null, { status: 204 });
  }),
];
