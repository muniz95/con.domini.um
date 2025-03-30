import { MutationConfig } from '@/lib/react-query';
import BrigadeMember from '@/models/BrigadeMember';
import { useMutation } from '@tanstack/react-query';

const createBrigadeMember = async (
  data: Omit<BrigadeMember, 'id'>
): Promise<BrigadeMember> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
  });
};

type UseBrigadeMemberOptions = {
  mutationConfig?: MutationConfig<typeof createBrigadeMember>;
};

export const useCreateBrigadeMember = ({
  mutationConfig,
}: UseBrigadeMemberOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createBrigadeMember,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
