import { QueryConfig } from '@/lib/react-query';
import Reservation from '@/models/ReservationRecord';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReservations = (): Promise<Reservation[]> =>
  Promise.resolve<Reservation[]>([
    {
      area: 'Academia',
      date: new Date(),
      id: 1,
      reservedBy: 'Teste 1',
    },
    {
      area: 'Churrasqueira 1',
      date: new Date(),
      id: 2,
      reservedBy: 'Teste 2',
    },
    {
      area: 'Churrasqueira 2',
      date: new Date(),
      id: 3,
      reservedBy: 'Teste 3',
    },
    {
      area: 'Quadra',
      date: new Date(),
      id: 4,
      reservedBy: 'Teste 4',
    },
    {
      area: 'Salão de festas 1',
      date: new Date(),
      id: 5,
      reservedBy: 'Teste 5',
    },
    {
      area: 'Salão de festas 2',
      date: new Date(),
      id: 6,
      reservedBy: 'Teste 6',
    },
  ]);

export const getReservationsQueryOptions = () => {
  return queryOptions({
    queryKey: ['reservations'],
    queryFn: () => getReservations(),
  });
};

type UseGetReservationsOptions = {
  queryConfig?: QueryConfig<typeof getReservations>;
};

export const useGetReservations = ({
  queryConfig,
}: UseGetReservationsOptions = {}) => {
  return useQuery({
    ...getReservationsQueryOptions(),
    ...queryConfig,
  });
};
