import React from 'react';
import CollaboratorsStore from './store';
import S from './styled';

const Collaborators = () => {
  const store = React.useContext(CollaboratorsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  return (
    <>
      <h2>Colaboradores</h2>
      <S.Center>
        <S.Table>
          {store.items.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.role}</td>
              <td>{record.startWork}</td>
              <td>{record.endWork}</td>
            </tr>
          ))}
        </S.Table>
      </S.Center>
    </>
  );
};

export default Collaborators;
