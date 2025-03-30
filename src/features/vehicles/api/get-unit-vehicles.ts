import { QueryConfig } from '@/lib/react-query';
import Vehicle from '@/models/Vehicle';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getUnitVehicles = (): Promise<Vehicle[]> =>
  Promise.resolve<Vehicle[]>([
    {
      brand: 'Fiat',
      model: 'Palio',
      color: 'Red',
      id: 1,
      plate: 'ABC1234',
      category: 'Car',
    },
    {
      brand: 'Honda',
      model: 'Civic',
      color: 'Black',
      id: 2,
      plate: 'XYZ5678',
      category: 'Car',
    },
    {
      brand: 'Ford',
      model: 'F-150',
      color: 'Blue',
      id: 3,
      plate: 'LMN9101',
      category: 'Truck',
    },
    {
      brand: 'Harley-Davidson',
      model: 'Street 750',
      color: 'Black',
      id: 4,
      plate: 'QRS2345',
      category: 'Motorcycle',
    },
  ]);

export const getUnitVehiclesQueryOptions = () => {
  return queryOptions({
    queryKey: ['surveys'],
    queryFn: () => getUnitVehicles(),
  });
};

type UseGetUnitVehiclesOptions = {
  queryConfig?: QueryConfig<typeof getUnitVehicles>;
};

export const useGetUnitVehicles = ({
  queryConfig,
}: UseGetUnitVehiclesOptions = {}) => {
  return useQuery({
    ...getUnitVehiclesQueryOptions(),
    ...queryConfig,
  });
};
