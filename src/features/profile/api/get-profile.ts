import { QueryConfig } from '@/lib/react-query';
import User from '@/models/User';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getProfile = (): Promise<User> =>
  Promise.resolve<User>({
    id: 1,
    name: 'Admin',
    email: 'admin@admin.com',
    unit: '5-102',
    login: 'admin',
    birthdate: new Date('1995-01-01'),
    gender: 'male',
    martialStatus: 'single',
    mobilityRestriction: false,
    role: 'admin',
    visibility: true,
  });

export const getProfileQueryOptions = () => {
  return queryOptions({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  });
};

type UseGetProfileOptions = {
  queryConfig?: QueryConfig<typeof getProfile>;
};

export const useGetProfile = ({ queryConfig }: UseGetProfileOptions = {}) => {
  return useQuery({
    ...getProfileQueryOptions(),
    ...queryConfig,
  });
};
