import { observer } from "mobx-react";
import React from "react";
import ProvidencesStore from './store';
import S from './styled';

const Providences: React.FC<{}> = observer(() => {
  const store = React.useContext(ProvidencesStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Obras & Providências</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Obra</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
          {store.providences.map((item) =>
            <tr key={item.id}>
              <td>{item.details}</td>
              <td>{item.category}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Providences;
