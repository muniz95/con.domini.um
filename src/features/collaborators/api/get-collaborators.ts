import { QueryConfig } from '@/lib/react-query';
import Collaborator from '@/models/Collaborator';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getCollaborators = (): Promise<Collaborator[]> =>
  Promise.resolve([
    {
      id: 1,
      name: 'John Doe',
      role: 'Developer',
      startWork: '2023-01-01',
      endWork: '2023-12-31',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
      startWork: '2023-02-01',
      endWork: '2023-11-30',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Project Manager',
      startWork: '2023-03-01',
      endWork: '2024-02-28',
    },
  ]);

export const getCollaboratorsQueryOptions = () => {
  return queryOptions({
    queryKey: ['collaborators'],
    queryFn: () => getCollaborators(),
  });
};

type UseGetCollaboratorsOptions = {
  queryConfig?: QueryConfig<typeof getCollaborators>;
};

export const useGetCollaborators = ({
  queryConfig,
}: UseGetCollaboratorsOptions = {}) => {
  return useQuery({
    ...getCollaboratorsQueryOptions(),
    ...queryConfig,
  });
};
