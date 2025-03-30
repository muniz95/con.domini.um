import { MutationConfig } from '@/lib/react-query';
import { Assembly } from '@/models/Assembly';
import { useMutation } from '@tanstack/react-query';

const createAssembly = async (
  data: Omit<Assembly, 'id'>
): Promise<Assembly> => {
  return Promise.resolve({
    ...data,
    id: Math.floor(Math.random() * 1000),
  });
};

type UseAssemblyOptions = {
  mutationConfig?: MutationConfig<typeof createAssembly>;
};

export const useCreateAssembly = ({
  mutationConfig,
}: UseAssemblyOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createAssembly,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
