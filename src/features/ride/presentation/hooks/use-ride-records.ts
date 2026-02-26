import { useQuery } from '@tanstack/react-query';
import { RideRepository } from '../../data/repositories/ride.repository';
import { RideService } from '../../domain/services/ride-service';
import { QueryConfig } from '@/lib/react-query';

const rideService = new RideService(new RideRepository());

export const RIDE_QUERY_KEYS = {
  all: ['rides'] as const,
  lists: () => [...RIDE_QUERY_KEYS.all, 'list'] as const,
  list: (filters: string) => [...RIDE_QUERY_KEYS.lists(), { filters }] as const,
  details: () => [...RIDE_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: number) => [...RIDE_QUERY_KEYS.details(), id] as const,
};

type UseRideRecordsOptions = {
  queryConfig?: QueryConfig<typeof rideService.getRideRecords>;
};

export const useRideRecords = ({ queryConfig }: UseRideRecordsOptions = {}) => {
  return useQuery({
    queryKey: RIDE_QUERY_KEYS.lists(),
    queryFn: () => rideService.getRideRecords(),
    ...queryConfig,
  });
};
