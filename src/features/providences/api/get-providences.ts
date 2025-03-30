import { QueryConfig } from '@/lib/react-query';
import Providence from '@/models/Providence';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getProvidences = (): Promise<Providence[]> =>
  Promise.resolve<Providence[]>([
    {
      id: 1,
      details: 'Obra 1',
      category: 'Categoria 1',
    },
    {
      id: 2,
      details: 'Obra 2',
      category: 'Categoria 2',
    },
    {
      id: 3,
      details: 'Obra 3',
      category: 'Categoria 3',
    },
    {
      id: 4,
      details: 'Obra 4',
      category: 'Categoria 4',
    },
  ]);

export const getProvidencesQueryOptions = () => {
  return queryOptions({
    queryKey: ['providences'],
    queryFn: () => getProvidences(),
  });
};

type UseGetProvidencesOptions = {
  queryConfig?: QueryConfig<typeof getProvidences>;
};

export const useGetProvidences = ({
  queryConfig,
}: UseGetProvidencesOptions = {}) => {
  return useQuery({
    ...getProvidencesQueryOptions(),
    ...queryConfig,
  });
};
