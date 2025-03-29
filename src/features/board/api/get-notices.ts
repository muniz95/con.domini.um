import { QueryConfig } from '@/lib/react-query';
import Notice from '@/models/Notice';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getNotices = (): Promise<Notice[]> =>
  Promise.resolve([
    {
      id: 1,
      title: 'Notice 1',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Notice 2',
      date: new Date(),
    },
    {
      id: 3,
      title: 'Notice 3',
      date: new Date(),
    },
    {
      id: 4,
      title: 'Notice 4',
      date: new Date(),
    },
  ]);

export const getNoticesQueryOptions = () => {
  return queryOptions({
    queryKey: ['notices'],
    queryFn: () => getNotices(),
  });
};

type UseGetNoticesOptions = {
  queryConfig?: QueryConfig<typeof getNotices>;
};

export const useGetNotices = ({ queryConfig }: UseGetNoticesOptions = {}) => {
  return useQuery({
    ...getNoticesQueryOptions(),
    ...queryConfig,
  });
};
