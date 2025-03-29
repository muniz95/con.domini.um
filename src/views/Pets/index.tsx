import React from 'react';
import PetsStore from './store';
import S from './styled';

const Pets = () => {
  const store = React.useContext(PetsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Meus pets</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Raça</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {store.pets.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.race}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Pets;
