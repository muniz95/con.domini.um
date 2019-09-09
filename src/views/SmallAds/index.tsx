import { observer } from "mobx-react";
import React from "react";
import S from "./styled";

const SmallAds: React.FC<{}> = observer(() => {
  return (
    <React.Fragment>
      <h2>Classificados</h2>
      <S.TabBar>
        <S.Tab>Anúncios</S.Tab>
      </S.TabBar>
    </React.Fragment>
  );
});

export default SmallAds;
