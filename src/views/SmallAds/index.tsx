import { observer } from "mobx-react";
import React from "react";
import S from "./styled";

const SmallAds: React.FC<{}> = observer(() => {
  return (
    <React.Fragment>
      <h2>Classificados</h2>
      <S.TabBar>
        <S.Tab><button>Anúncios</button></S.Tab>
        <S.Tab><button>Meus anúncios</button></S.Tab>
        <S.Tab><button>Novo anúncio</button></S.Tab>
      </S.TabBar>
    </React.Fragment>
  );
});

export default SmallAds;
