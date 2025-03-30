import { MutationConfig } from '@/lib/react-query';
import { Administrator } from '@/models/Administrator';
import { useMutation } from '@tanstack/react-query';

const createAdministrator = async (
  data: Omit<Administrator, 'id'>
): Promise<Administrator> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
  });
};

type UseAdministratorOptions = {
  mutationConfig?: MutationConfig<typeof createAdministrator>;
};

export const useCreateAdministrator = ({
  mutationConfig,
}: UseAdministratorOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createAdministrator,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
