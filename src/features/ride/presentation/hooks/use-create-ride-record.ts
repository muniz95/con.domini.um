import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RideRepository } from '../../data/repositories/ride.repository';
import { RideService } from '../../domain/services/ride-service';
import { RideRecord } from '../../domain/entities/ride-record';
import { MutationConfig } from '@/lib/react-query';
import { RIDE_QUERY_KEYS } from './use-ride-records';

const rideService = new RideService(new RideRepository());

type UseCreateRideRecordOptions = {
  mutationConfig?: MutationConfig<typeof rideService.createRideRecord>;
};

export const useCreateRideRecord = ({
  mutationConfig,
}: UseCreateRideRecordOptions = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (record: Omit<RideRecord, 'id'>) =>
      rideService.createRideRecord(record),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: RIDE_QUERY_KEYS.lists(),
      });
    },
    ...mutationConfig,
  });
};
