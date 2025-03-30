import { QueryConfig } from '@/lib/react-query';
import Dweller from '@/models/Dweller';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getUnitDwellers = (): Promise<Dweller[]> =>
  Promise.resolve<Dweller[]>([
    {
      birthdate: new Date('2000-01-01'),
      kinship: 'Mãe',
      name: 'Maria da Silva',
      rg: '123456789',
      mobilityRestriction: false,
      id: 1,
      userId: 1,
    },
    {
      birthdate: new Date('1995-05-15'),
      kinship: 'Pai',
      name: 'João da Silva',
      rg: '987654321',
      mobilityRestriction: true,
      id: 2,
      userId: 1,
    },
    {
      birthdate: new Date('2010-10-10'),
      kinship: 'Filho',
      name: 'Pedro da Silva',
      rg: '456789123',
      mobilityRestriction: false,
      id: 3,
      userId: 1,
    },
    {
      birthdate: new Date('2015-03-03'),
      kinship: 'Filha',
      name: 'Ana da Silva',
      rg: '321654987',
      mobilityRestriction: true,
      id: 4,
      userId: 1,
    },
  ]);

export const getUnitDwellersQueryOptions = () => {
  return queryOptions({
    queryKey: ['surveys'],
    queryFn: () => getUnitDwellers(),
  });
};

type UseGetUnitDwellersOptions = {
  queryConfig?: QueryConfig<typeof getUnitDwellers>;
};

export const useGetUnitDwellers = ({
  queryConfig,
}: UseGetUnitDwellersOptions = {}) => {
  return useQuery({
    ...getUnitDwellersQueryOptions(),
    ...queryConfig,
  });
};
