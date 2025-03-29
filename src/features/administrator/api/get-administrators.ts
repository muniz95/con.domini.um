import { QueryConfig } from '@/lib/react-query';
import { Administrator } from '@/models/Administrator';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getAdministrators = (): Promise<Administrator[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'John Doe',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '987654321',
    },
  ]);

export const getAdministratorsQueryOptions = () => {
  return queryOptions({
    queryKey: ['administrators'],
    queryFn: () => getAdministrators(),
  });
};

type UseCommentsOptions = {
  queryConfig?: QueryConfig<typeof getAdministrators>;
};

export const useAdministrators = ({ queryConfig }: UseCommentsOptions = {}) => {
  return useQuery({
    ...getAdministratorsQueryOptions(),
    ...queryConfig,
  });
};
