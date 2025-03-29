import { QueryConfig } from '@/lib/react-query';
import { Assembly } from '@/models/Assembly';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getAssemblies = (): Promise<Assembly[]> =>
  Promise.resolve([
    {
      id: 1,
      title: 'Assembly 1',
      date: new Date(),
      confirmed: true,
    },
    {
      id: 2,
      title: 'Assembly 2',
      date: new Date(),
      confirmed: false,
    },
    {
      id: 3,
      title: 'Assembly 3',
      date: new Date(),
      confirmed: true,
    },
  ]);

export const getAssembliesQueryOptions = () => {
  return queryOptions({
    queryKey: ['assemblies'],
    queryFn: () => getAssemblies(),
  });
};

type UseCommentsOptions = {
  queryConfig?: QueryConfig<typeof getAssemblies>;
};

export const useGetAssemblies = ({ queryConfig }: UseCommentsOptions = {}) => {
  return useQuery({
    ...getAssembliesQueryOptions(),
    ...queryConfig,
  });
};
