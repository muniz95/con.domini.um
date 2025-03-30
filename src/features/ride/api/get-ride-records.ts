import { QueryConfig } from '@/lib/react-query';
import RideRecord from '@/models/RideRecord';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRideRecords = (): Promise<RideRecord[]> =>
  Promise.resolve<RideRecord[]>([
    {
      place: 'Academia',
      date: new Date(),
      route: 'Teste 1',
      days: ['Segunda', 'Quarta', 'Sexta'],
      category: 'offer',
      id: 1,
      departure: '08:00',
      destiny: 'Escola',
      phone: '11999999999',
      town: 'Centro',
    },
    {
      place: 'Churrasqueira 1',
      date: new Date(),
      route: 'Teste 2',
      days: ['Terça', 'Quinta'],
      category: 'need',
      id: 2,
      departure: '09:00',
      destiny: 'Trabalho',
      phone: '11988888888',
      town: 'Jardim',
    },
    {
      place: 'Churrasqueira 2',
      date: new Date(),
      route: 'Teste 3',
      days: ['Sábado'],
      category: 'offer',
      id: 3,
      departure: '10:00',
      destiny: 'Festa',
      phone: '11977777777',
      town: 'Praia',
    },
    {
      place: 'Quadra',
      date: new Date(),
      route: 'Teste 4',
      days: ['Domingo'],
      category: 'need',
      id: 4,
      departure: '11:00',
      destiny: 'Igreja',
      phone: '11966666666',
      town: 'Centro',
    },
  ]);

export const getRideRecordsQueryOptions = () => {
  return queryOptions({
    queryKey: ['rides'],
    queryFn: () => getRideRecords(),
  });
};

type UseGetRideRecordsOptions = {
  queryConfig?: QueryConfig<typeof getRideRecords>;
};

export const useGetRideRecords = ({
  queryConfig,
}: UseGetRideRecordsOptions = {}) => {
  return useQuery({
    ...getRideRecordsQueryOptions(),
    ...queryConfig,
  });
};
