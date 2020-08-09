import { observer } from "mobx-react";
import React from "react";
import BoardStore from './store';
import S from './styled';

const Board: React.FC<{}> = observer(() => {
  const store = React.useContext(BoardStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Quadro de avisos</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
          {store.noticeList.map((item) =>
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.date?.toLocaleDateString('pt-br')}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Board;
