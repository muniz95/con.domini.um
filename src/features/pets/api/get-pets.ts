import { QueryConfig } from '@/lib/react-query';
import Pet from '@/models/Pet';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPets = (): Promise<Pet[]> =>
  Promise.resolve<Pet[]>([
    {
      id: 1,
      name: 'Dog',
      race: 'Labrador',
      category: 'Dog',
    },
  ]);

export const getPetsQueryOptions = () => {
  return queryOptions({
    queryKey: ['pets'],
    queryFn: () => getPets(),
  });
};

type UseGetPetsOptions = {
  queryConfig?: QueryConfig<typeof getPets>;
};

export const useGetPets = ({ queryConfig }: UseGetPetsOptions = {}) => {
  return useQuery({
    ...getPetsQueryOptions(),
    ...queryConfig,
  });
};
