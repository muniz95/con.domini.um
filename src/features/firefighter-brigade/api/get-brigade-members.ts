import { QueryConfig } from '@/lib/react-query';
import BrigadeMember from '@/models/BrigadeMember';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getBrigadeMembers = (): Promise<BrigadeMember[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'John Doe',
      category: 'Firefighter',
    },
    {
      id: 2,
      name: 'Jane Smith',
      category: 'Medic',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      category: 'Rescue',
    },
    {
      id: 4,
      name: 'Bob Brown',
      category: 'Firefighter',
    },
    {
      id: 5,
      name: 'Charlie Black',
      category: 'Medic',
    },
  ]);

export const getBrigadeMembersQueryOptions = () => {
  return queryOptions({
    queryKey: ['brigademembers'],
    queryFn: () => getBrigadeMembers(),
  });
};

type UseGetBrigadeMembersOptions = {
  queryConfig?: QueryConfig<typeof getBrigadeMembers>;
};

export const useGetBrigadeMembers = ({
  queryConfig,
}: UseGetBrigadeMembersOptions = {}) => {
  return useQuery({
    ...getBrigadeMembersQueryOptions(),
    ...queryConfig,
  });
};
