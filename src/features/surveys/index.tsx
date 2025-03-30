import { useGetSurveys } from './api/get-surveys';
import S from './styled';

const Surveys = () => {
  const { data } = useGetSurveys();
  return (
    <>
      <h2>Enquetes</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Encerramento</th>
              <th>Votou</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((survey) => (
              <tr key={survey.id}>
                <td>{survey.title}</td>
                <td>{survey.closingDate?.toLocaleDateString('pt-br')}</td>
                <td>{survey.voted ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Surveys;
