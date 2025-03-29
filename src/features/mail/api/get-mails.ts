import { QueryConfig } from '@/lib/react-query';
import Mail from '@/models/Mail';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getMails = (): Promise<Mail[]> =>
  Promise.resolve([
    {
      id: 1,
      unit: 'Unidade 1',
      description: 'Descrição 1',
      receivedAt: new Date(),
      deliveredAt: new Date(),
    },
    {
      id: 2,
      unit: 'Unidade 2',
      description: 'Descrição 2',
      receivedAt: new Date(),
      deliveredAt: new Date(),
    },
    {
      id: 3,
      unit: 'Unidade 3',
      description: 'Descrição 3',
      receivedAt: new Date(),
      deliveredAt: new Date(),
    },
  ]);

export const getMailsQueryOptions = () => {
  return queryOptions({
    queryKey: ['mails'],
    queryFn: () => getMails(),
  });
};

type UseGetMailsOptions = {
  queryConfig?: QueryConfig<typeof getMails>;
};

export const useGetMails = ({ queryConfig }: UseGetMailsOptions = {}) => {
  return useQuery({
    ...getMailsQueryOptions(),
    ...queryConfig,
  });
};
