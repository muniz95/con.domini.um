import { QueryConfig } from '@/lib/react-query';
import Provider from '@/models/ProviderRecord';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getProviders = (): Promise<Provider[]> =>
  Promise.resolve<Provider[]>([
    {
      id: 1,
      name: 'Lucas',
      date: new Date(),
      ownerAtHome: true,
      reason: 'Limpeza',
      observation: 'Nada a declarar',
      rg: '1234567890',
      unit: '101',
    },
    {
      id: 2,
      name: 'Pedro',
      date: new Date(),
      ownerAtHome: false,
      reason: 'Manutenção',
      observation: 'Nada a declarar',
      rg: '0987654321',
      unit: '102',
    },
  ]);

export const getProvidersQueryOptions = () => {
  return queryOptions({
    queryKey: ['providers'],
    queryFn: () => getProviders(),
  });
};

type UseGetProvidersOptions = {
  queryConfig?: QueryConfig<typeof getProviders>;
};

export const useGetProviders = ({
  queryConfig,
}: UseGetProvidersOptions = {}) => {
  return useQuery({
    ...getProvidersQueryOptions(),
    ...queryConfig,
  });
};
