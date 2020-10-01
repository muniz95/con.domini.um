import { observer } from "mobx-react";
import React from "react";
import FirefighterBrigadeStore from "./store";
import S from "./styled";

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(FirefighterBrigadeStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  
  return (
    <React.Fragment>
      <h2>Brigada de incêndio</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Membro</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Administrator;
