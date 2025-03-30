import { QueryConfig } from '@/lib/react-query';
import SmallAd from '@/models/SmallAd';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getSmallAds = (): Promise<SmallAd[]> =>
  Promise.resolve<SmallAd[]>([
    {
      id: 1,
      name: 'Anúncio 1',
      creationDate: new Date(),
      createdBy: 'me',
      foundBy: 'me',
      status: 'active',
    },
    {
      id: 2,
      name: 'Anúncio 2',
      creationDate: new Date(),
      createdBy: 'me',
      foundBy: 'me',
      status: 'active',
    },
    {
      id: 3,
      name: 'Anúncio 3',
      creationDate: new Date(),
      createdBy: 'me',
      foundBy: 'me',
      status: 'active',
    },
  ]);

export const getSmallAdsQueryOptions = () => {
  return queryOptions({
    queryKey: ['smallads'],
    queryFn: () => getSmallAds(),
  });
};

type UseGetSmallAdsOptions = {
  queryConfig?: QueryConfig<typeof getSmallAds>;
};

export const useGetSmallAds = ({ queryConfig }: UseGetSmallAdsOptions = {}) => {
  return useQuery({
    ...getSmallAdsQueryOptions(),
    ...queryConfig,
  });
};
