import { observer } from "mobx-react";
import React from "react";
import UnitStore from './store';
import S from './styled';

const Unit: React.FC<{}> = observer(() => {
  const store = React.useContext(UnitStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Minha unidade</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>Parentesco</th>
              <th>Idade</th>
              <th>Restrição de mobiidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {store.dwellers.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.rg}</td>
              <td>{item.kinship}</td>
              <td>{item.age}</td>
              <td>{item.hasMobilityRestriction}</td>
              <td>
                <button>+</button>
                <button>/</button>
                <button>-</button>
              </td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Unit;
