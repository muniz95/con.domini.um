import { observer } from "mobx-react";
import React from "react";
import NeighborsStore from './store';
import S from './styled';

const Neighbors: React.FC<{}> = observer(() => {
  const store = React.useContext(NeighborsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Vizinhos</h2>

      <S.ItemCardContainer>
        {store.neighbors.map((item) =>
          <S.ItemCard key={item.id}>
            <S.ItemCardBody>
              <h4>{item.name}</h4>
              <button>Solicitar amizade</button>
            </S.ItemCardBody>
          </S.ItemCard>
        )}
      </S.ItemCardContainer>
    </>
  );
});

export default Neighbors;
