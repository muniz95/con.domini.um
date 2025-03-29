import { QueryConfig } from '@/lib/react-query';
import Event from '@/models/Event';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getEvents = (): Promise<Event[]> =>
  Promise.resolve([
    {
      id: 1,
      title: 'Evento 1',
      local: 'Local 1',
      date: new Date('2023-01-01'),
      attending: true,
    },
    {
      id: 2,
      title: 'Evento 2',
      local: 'Local 2',
      date: new Date('2023-02-01'),
      attending: false,
    },
    {
      id: 3,
      title: 'Evento 3',
      local: 'Local 3',
      date: new Date('2023-03-01'),
      attending: true,
    },
  ]);

export const getEventsQueryOptions = () => {
  return queryOptions({
    queryKey: ['events'],
    queryFn: () => getEvents(),
  });
};

type UseGetEventsOptions = {
  queryConfig?: QueryConfig<typeof getEvents>;
};

export const useGetEvents = ({ queryConfig }: UseGetEventsOptions = {}) => {
  return useQuery({
    ...getEventsQueryOptions(),
    ...queryConfig,
  });
};
