import { QueryConfig } from '@/lib/react-query';
import Survey from '@/models/Survey';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getSurveys = (): Promise<Survey[]> =>
  Promise.resolve<Survey[]>([
    {
      id: 1,
      title: 'Survey 1',
      closingDate: new Date('2023-10-01'),
      voted: false,
    },
    {
      id: 2,
      title: 'Survey 2',
      closingDate: new Date('2023-10-02'),
      voted: false,
    },
    {
      id: 3,
      title: 'Survey 3',
      closingDate: new Date('2023-10-03'),
      voted: false,
    },
    {
      id: 4,
      title: 'Survey 4',
      closingDate: new Date('2023-10-04'),
      voted: false,
    },
  ]);

export const getSurveysQueryOptions = () => {
  return queryOptions({
    queryKey: ['surveys'],
    queryFn: () => getSurveys(),
  });
};

type UseGetSurveysOptions = {
  queryConfig?: QueryConfig<typeof getSurveys>;
};

export const useGetSurveys = ({ queryConfig }: UseGetSurveysOptions = {}) => {
  return useQuery({
    ...getSurveysQueryOptions(),
    ...queryConfig,
  });
};
