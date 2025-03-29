import { observer } from 'mobx-react';
import React from 'react';
import PollsStore from './store';
import S from './styled';

const Polls: React.FC<{}> = observer(() => {
  const store = React.useContext(PollsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Votações</h2>

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
            {store.polls.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.closingDate?.toLocaleDateString('pt-br')}</td>
                <td>{item.voted ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Polls;
