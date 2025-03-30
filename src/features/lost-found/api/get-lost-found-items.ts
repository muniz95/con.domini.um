import { QueryConfig } from '@/lib/react-query';
import LostFoundItem from '@/models/LostFoundItem';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getLostFoundItems = (): Promise<LostFoundItem[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'Chaveiro',
      foundBy: 'João Silva',
      description: 'Chaveiro com várias chaves',
      image: 'https://example.com/image1.jpg',
      creationDate: new Date('2023-01-01'),
      status: 'found',
    },
    {
      id: 2,
      name: 'Celular',
      foundBy: 'Maria Oliveira',
      description: 'Celular Samsung Galaxy S21',
      image: 'https://example.com/image2.jpg',
      creationDate: new Date('2023-02-01'),
      status: 'found',
    },
    {
      id: 3,
      name: 'Óculos de Sol',
      foundBy: 'Carlos Pereira',
      description: 'Óculos de sol Ray-Ban',
      image: 'https://example.com/image3.jpg',
      creationDate: new Date('2023-03-01'),
      status: 'lost',
    },
  ]);

export const getLostFoundItemsQueryOptions = () => {
  return queryOptions({
    queryKey: ['lostfound'],
    queryFn: () => getLostFoundItems(),
  });
};

type UseGetLostFoundItemsOptions = {
  queryConfig?: QueryConfig<typeof getLostFoundItems>;
};

export const useGetLostFoundItems = ({
  queryConfig,
}: UseGetLostFoundItemsOptions = {}) => {
  return useQuery({
    ...getLostFoundItemsQueryOptions(),
    ...queryConfig,
  });
};
