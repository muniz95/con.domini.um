import { QueryConfig } from '@/lib/react-query';
import Occurrence from '@/models/Occurrence';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getOccurrences = (): Promise<Occurrence[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'Ocorrência 1',
      foundBy: 'Fulano',
      createdBy: 'Ciclano',
      creationDate: new Date(),
      status: 'Aberta',
    },
    {
      id: 2,
      name: 'Ocorrência 2',
      foundBy: 'Beltrano',
      createdBy: 'Ciclano',
      creationDate: new Date(),
      status: 'Fechada',
    },
    {
      id: 3,
      name: 'Ocorrência 3',
      foundBy: 'Fulano',
      createdBy: 'Ciclano',
      creationDate: new Date(),
      status: 'Aberta',
    },
  ]);

export const getOccurrencesQueryOptions = () => {
  return queryOptions({
    queryKey: ['occurrences'],
    queryFn: () => getOccurrences(),
  });
};

type UseGetOccurrencesOptions = {
  queryConfig?: QueryConfig<typeof getOccurrences>;
};

export const useGetOccurrences = ({
  queryConfig,
}: UseGetOccurrencesOptions = {}) => {
  return useQuery({
    ...getOccurrencesQueryOptions(),
    ...queryConfig,
  });
};
