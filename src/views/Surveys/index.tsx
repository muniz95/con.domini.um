import React from 'react';
import S from './styled';
import SurveysStore from './store';

const Surveys = () => {
  const store = React.useContext(SurveysStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
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
            {store.records.map((survey) => (
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
