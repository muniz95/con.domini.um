import { MutationConfig } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteBrigadeMember = async (data: number): Promise<boolean> => {
  return Promise.resolve(true);
};

type UseBrigadeMemberOptions = {
  mutationConfig?: MutationConfig<typeof deleteBrigadeMember>;
};

export const useDeleteBrigadeMember = ({
  mutationConfig,
}: UseBrigadeMemberOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: deleteBrigadeMember,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
