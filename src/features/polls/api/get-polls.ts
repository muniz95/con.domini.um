import { QueryConfig } from '@/lib/react-query';
import Poll from '@/models/Poll';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPolls = (): Promise<Poll[]> =>
  Promise.resolve<Poll[]>([
    {
      id: 1,
      title: 'Poll 1',
      closingDate: new Date('2023-10-01'),
      voted: false,
    },
    {
      id: 2,
      title: 'Poll 2',
      closingDate: new Date('2023-10-02'),
      voted: true,
    },
    {
      id: 3,
      title: 'Poll 3',
      closingDate: new Date('2023-10-03'),
      voted: false,
    },
    {
      id: 4,
      title: 'Poll 4',
      closingDate: new Date('2023-10-04'),
      voted: true,
    },
  ]);

export const getPollsQueryOptions = () => {
  return queryOptions({
    queryKey: ['polls'],
    queryFn: () => getPolls(),
  });
};

type UseGetPollsOptions = {
  queryConfig?: QueryConfig<typeof getPolls>;
};

export const useGetPolls = ({ queryConfig }: UseGetPollsOptions = {}) => {
  return useQuery({
    ...getPollsQueryOptions(),
    ...queryConfig,
  });
};
