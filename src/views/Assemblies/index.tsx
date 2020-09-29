import { observer } from "mobx-react";
import React from "react";
import AssembliesStore from "./store";
import S from "./styled";

const Assemblies: React.FC<{}> = observer(() => {
  const store = React.useContext(AssembliesStore);

  React.useEffect(() => {
    store.fetchItems()
  }, []);

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
          {store.items.map((item) =>
            <tr>
              <td>{item.title}</td>
              <td>{item.dateToString}</td>
              <td>{item.isConfirmed}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Assemblies;
