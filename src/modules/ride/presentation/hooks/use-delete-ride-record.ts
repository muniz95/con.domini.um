import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RideRepository } from '../../data/repositories/ride.repository';
import { RideService } from '../../domain/services/ride.service';
import { MutationConfig } from '@/lib/react-query';
import { RIDE_QUERY_KEYS } from './use-ride-records';

const rideService = new RideService(new RideRepository());

type UseDeleteRideRecordOptions = {
  mutationConfig?: MutationConfig<typeof rideService.deleteRideRecord>;
};

export const useDeleteRideRecord = ({
  mutationConfig,
}: UseDeleteRideRecordOptions = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => rideService.deleteRideRecord(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: RIDE_QUERY_KEYS.lists(),
      });
    },
    ...mutationConfig,
  });
};
