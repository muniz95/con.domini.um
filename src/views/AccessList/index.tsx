import { observer } from "mobx-react";
import React from "react";
import S from './styled';
import AccessListStore from './store';
import AccessRecord from "../../models/AccessRecord";

const AccessList: React.FC<{}> = observer(() => {
  const store = React.useContext(AccessListStore);
  const temporary = (record: AccessRecord) => !record.permanent;
  const permanent = (record: AccessRecord) => record.permanent;

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Enquetes</h2>

      <S.Center>
        <h2>Acesso hoje</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>R.G.</th>
              <th>Parentesco</th>
              <th>Obs.</th>
            </tr>
          </thead>
          <tbody>
          {store.records.filter(temporary).map((record) =>
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.rg}</td>
              <td>{record.kinship}</td>
              <td>{record.observation}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
      <S.Center>
        <h2>Acesso permanente</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>R.G.</th>
              <th>Parentesco</th>
              <th>Obs.</th>
            </tr>
          </thead>
          <tbody>
          {store.records.filter(permanent).map((record) =>
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.rg}</td>
              <td>{record.kinship}</td>
              <td>{record.observation}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default AccessList;
