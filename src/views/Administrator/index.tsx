import { observer } from "mobx-react";
import React from "react";
import AdministratorStore from "./store";
import S from "./styled";

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(AdministratorStore);
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
          {store.administrators.map((record) =>
            <tr>
              <td>{record.name}</td>
              <td>{record.phone}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Administrator;
