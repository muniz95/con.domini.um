import { observer } from "mobx-react";
import React from "react";
import AssembliesStore from "./store";
import S from "./styled";

const Assemblies: React.FC<{}> = observer(() => {
  const store = React.useContext(AssembliesStore);
  return (
    <React.Fragment>
      <h2>Assembleias</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
              <th>Confirmou</th>
            </tr>
          </thead>
          <tbody>
          {store.records.map((record) =>
            <tr>
              <td>{record.title}</td>
              <td>{record.date.toLocaleDateString()}</td>
              <td>{record.confirmed ? "Sim" : "Não"}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Assemblies;
