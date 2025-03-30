import { MutationConfig } from '@/lib/react-query';
import BrigadeMember from '@/models/BrigadeMember';
import { useMutation } from '@tanstack/react-query';

const updateBrigadeMember = async (
  data: BrigadeMember
): Promise<BrigadeMember> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
  });
};

type UseBrigadeMemberOptions = {
  mutationConfig?: MutationConfig<typeof updateBrigadeMember>;
};

export const useUpdateBrigadeMember = ({
  mutationConfig,
}: UseBrigadeMemberOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: updateBrigadeMember,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
