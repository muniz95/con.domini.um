import { QueryConfig } from '@/lib/react-query';
import { AccessRecord } from '@/models/AccessRecord';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getAccessList = (): Promise<AccessRecord[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'John Doe',
      unit: 'Unit A',
      rg: '123456789',
      kinship: 'Brother',
      direct: true,
      permanent: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      unit: 'Unit B',
      rg: '987654321',
      kinship: 'Sister',
      direct: false,
      permanent: true,
    },
  ]);

export const getAccessListQueryOptions = () => {
  return queryOptions({
    queryKey: ['accessList'],
    queryFn: () => getAccessList(),
  });
};

type UseCommentsOptions = {
  queryConfig?: QueryConfig<typeof getAccessList>;
};

export const useGetAccessList = ({ queryConfig }: UseCommentsOptions = {}) => {
  return useQuery({
    ...getAccessListQueryOptions(),
    ...queryConfig,
  });
};
