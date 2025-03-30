import { MutationConfig } from '@/lib/react-query';
import RideRecord from '@/models/RideRecord';
import { useMutation } from '@tanstack/react-query';

const createRideRecord = async (
  data: Omit<RideRecord, 'id'>
): Promise<RideRecord> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
  });
};

type UseRideRecordOptions = {
  mutationConfig?: MutationConfig<typeof createRideRecord>;
};

export const useCreateRideRecord = ({
  mutationConfig,
}: UseRideRecordOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createRideRecord,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
