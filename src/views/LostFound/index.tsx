import { observer } from "mobx-react";
import React from "react";
import LostFoundItem from "../../models/LostFoundItem";
import LostFoundStore from "./store";
import S from "./styled";

const LostFound: React.FC = observer(() => {
  const store = React.useContext(LostFoundStore);
  store.fetchItems();
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

    <S.Center>
      <S.Table>
        <tbody>
          { store.items.map((item: LostFoundItem) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.foundBy}</td>
              <td>{item.creationDate.toLocaleDateString()}</td>
              <td>{item.status}</td>
            </tr>,
          ) }
        </tbody>
      </S.Table>
    </S.Center>
  </React.Fragment>;
});

export default LostFound;
