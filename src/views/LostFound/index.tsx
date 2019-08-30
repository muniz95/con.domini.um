import React from "react";
import S from "./styled";
import { observer } from "mobx-react-lite";
import LostFoundStore from './store';

const LostFound: React.FC = observer(() => {
  const store = React.useContext(LostFoundStore);
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
          { store.items.map((item) => 
            <tr>
              <td>Notebook</td>
              <td>Administração - gestor - gestão</td>
              <td>04/11/2018</td>
              <td>Resolvido</td>
            </tr>
          ) }
        </tbody>
      </S.Table>
    </S.Center>
  </React.Fragment>
});

export default LostFound;
