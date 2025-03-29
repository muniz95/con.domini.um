import { QueryConfig } from '@/lib/react-query';
import Employee from '@/models/Employee';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getEmployees = (): Promise<Employee[]> =>
  Promise.resolve([
    {
      id: 1,
      photo: 'https://example.com/photo1.jpg',
      name: 'John Doe',
      role: 'Developer',
      begin: '2023-01-01',
      end: '2023-12-31',
    },
    {
      id: 2,
      photo: 'https://example.com/photo2.jpg',
      name: 'Jane Smith',
      role: 'Designer',
      begin: '2023-02-01',
      end: '2023-11-30',
    },
    {
      id: 3,
      photo: 'https://example.com/photo3.jpg',
      name: 'Alice Johnson',
      role: 'Project Manager',
      begin: '2023-03-01',
    },
  ]);

export const getEmployeesQueryOptions = () => {
  return queryOptions({
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
  });
};

type UseGetEmployeesOptions = {
  queryConfig?: QueryConfig<typeof getEmployees>;
};

export const useGetEmployees = ({
  queryConfig,
}: UseGetEmployeesOptions = {}) => {
  return useQuery({
    ...getEmployeesQueryOptions(),
    ...queryConfig,
  });
};
