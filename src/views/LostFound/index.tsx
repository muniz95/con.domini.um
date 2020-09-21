import { observer } from "mobx-react";
import React from "react";
import LostFoundItem from "../../models/LostFoundItem";
import LostFoundStore from "./store";
import S from "./styled";

const LostFound: React.FC = observer(() => {
  const store = React.useContext(LostFoundStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [])
  return <React.Fragment>
    <h2>Achados & perdidos</h2>
    <p>Comunique perdas ou avise se porventura encontrar objetos ou valores nas dependências do condomínio.</p>
    <p>Pratique a cidadania!</p>

    <S.SmileysContainer>
      <S.EmojiBox>
        <S.HappyEmoji />
        Achei
      </S.EmojiBox>
      <S.EmojiBox>
        <S.SadEmoji />
        Perdi
      </S.EmojiBox>
    </S.SmileysContainer>

    <S.ItemCardContainer>
      { store.items.map((item: LostFoundItem) =>
        <S.ItemCard key={item.id}>
          <S.ItemCardBody>
            <h2>{item.name}</h2>
            <h6>{item.createdAt}</h6>
          </S.ItemCardBody>
        </S.ItemCard>,
      ) }
    </S.ItemCardContainer>
  </React.Fragment>;
});

export default LostFound;
