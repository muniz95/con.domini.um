import { RideRecordDTO } from '@/modules/ride/domain/entities/ride-record';
import { registerMock } from '@/core/api/mock-interceptor';

export const mockRideData: RideRecordDTO[] = [
  {
    id: 1,
    destiny: 'Centro',
    category: 'offer',
    phone: '(11) 98765-4321',
    town: 'São Paulo',
    departure: '08:00',
    place: 'Estação Central',
    route: 'Centro - Vila Mariana',
    days: ['seg', 'ter', 'qua', 'qui', 'sex'],
    date: '2026-02-28',
  },
  {
    id: 2,
    destiny: 'Aeroporto',
    category: 'need',
    phone: '(11) 99876-5432',
    town: 'São Paulo',
    departure: '06:30',
    place: 'Metrô Jabaquara',
    route: 'Jabaquara - GRU Airport',
    days: ['sab'],
    date: '2026-03-01',
  },
  {
    id: 3,
    destiny: 'Shopping',
    category: 'offer',
    phone: '(11) 91234-5678',
    town: 'São Paulo',
    departure: '14:00',
    place: 'Rua Augusta',
    route: 'Consolação - Imirim',
    days: ['ter', 'qua', 'sex'],
    date: '2026-02-28',
  },
];

// Auto-register mock data
registerMock('/rides', mockRideData);
