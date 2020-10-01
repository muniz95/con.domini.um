import { observer } from "mobx-react";
import React from "react";
import AdministratorStore from "./store";
import S from "./styled";

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(AdministratorStore);
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  return (
    <React.Fragment>
      <h2>Administradora</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Administradora</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Administrator;
