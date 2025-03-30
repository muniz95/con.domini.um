import { QueryConfig } from '@/lib/react-query';
import Message from '@/models/Message';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getMessages = (): Promise<Message[]> =>
  Promise.resolve([
    {
      id: 1,
      from: 'Unidade 1',
      to: 'Unidade 2',
      content: 'Descrição 1',
      deliveredAt: new Date(),
    },
    {
      id: 2,
      from: 'Unidade 2',
      to: 'Unidade 3',
      content: 'Descrição 2',
      deliveredAt: new Date(),
    },
    {
      id: 3,
      from: 'Unidade 3',
      to: 'Unidade 1',
      content: 'Descrição 3',
      deliveredAt: new Date(),
    },
  ]);

export const getMessagesQueryOptions = () => {
  return queryOptions({
    queryKey: ['messages'],
    queryFn: () => getMessages(),
  });
};

type UseGetMessagesOptions = {
  queryConfig?: QueryConfig<typeof getMessages>;
};

export const useGetMessages = ({ queryConfig }: UseGetMessagesOptions = {}) => {
  return useQuery({
    ...getMessagesQueryOptions(),
    ...queryConfig,
  });
};
