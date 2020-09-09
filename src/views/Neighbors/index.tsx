import { observer } from "mobx-react";
import React from "react";
import NeighborsStore from './store';
import S from './styled';

const Neighbors: React.FC<{}> = observer(() => {
  const store = React.useContext(NeighborsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Vizinhos</h2>

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
          {store.neighbors.map((item) =>
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.closingDate?.toLocaleDateString('pt-br')}</td>
              <td>{item.voted ? "Sim" : "Não"}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Neighbors;
