import { observer } from "mobx-react";
import React, { useState } from "react";
import S from "./styled";

const Sugestions: React.FC<{}> = observer(() => {
  const [fieldVisible, setFieldVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const buildingIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon("condomínio");
  };
  const siteIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon("website");
  };
  return (
    <React.Fragment>
      <h2>Caixa de sugestões</h2>

      <S.SmileysContainer>
        <S.IconBox onClick={buildingIconAction}>
          <S.BuildingIcon />
          Sugestão para o condomínio
        </S.IconBox>
        <S.IconBox onClick={siteIconAction}>
          <S.SiteIcon />
          Sugestão para o website
        </S.IconBox>
      </S.SmileysContainer>

      {fieldVisible &&
        <div>
          <label htmlFor="message">
            Envie sua sugestão para o {selectedIcon}:
          </label>
          <br/>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <br/>
          <button>Enviar</button>
        </div>
      }
    </React.Fragment>
  );
});

export default Sugestions;
