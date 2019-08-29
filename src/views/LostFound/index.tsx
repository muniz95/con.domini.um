import React from "react";
import S from "./styled";

const LostFound: React.FC = () =>
  <React.Fragment>
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

    <table>
      <tbody>
        <tr>
          <td>Notebook</td>
          <td>Administração - gestor - gestão</td>
          <td>04/11/2018</td>
          <td>Resolvido</td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>;

export default LostFound;
