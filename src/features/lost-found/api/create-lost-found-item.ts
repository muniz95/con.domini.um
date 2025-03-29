import { MutationConfig } from '@/lib/react-query';
import LostFoundItem from '@/models/LostFoundItem';
import { useMutation } from '@tanstack/react-query';

const createLostFoundItem = async (
  data: Omit<LostFoundItem, 'id' | 'creationDate' | 'status'>
): Promise<LostFoundItem> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
    creationDate: new Date(),
    status: 'PENDING',
  });
};

type UseLostFoundItemOptions = {
  mutationConfig?: MutationConfig<typeof createLostFoundItem>;
};

export const useCreateLostFoundItem = ({
  mutationConfig,
}: UseLostFoundItemOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createLostFoundItem,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
