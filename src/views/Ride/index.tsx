import { observer } from "mobx-react";
import React from "react";
import RideStore from "./store";
import S from "./styled";

const Ride: React.FC<{}> = observer(() => {
  const store = React.useContext(RideStore);
  const [fieldVisible, setFieldVisible] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState("");
  const offerIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon("condomínio");
  };
  const needIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon("website");
  };
  store.fetchItems();
  return (
    <React.Fragment>
      <h2>Carona solidária</h2>
      <p>A carona solidária tem o objetivo de unir os moradores para melhorar o trânsito e o ar das cidades.</p>
      <p>
        Além de você, várias pessoas que moram em seu condomínio provavelmente têm as mesmas necessidades de locomoção.
        Locais em comum como: escola das crianças, trabalho e família no interior são os mais comuns.
      </p>
      <p>Participe dessa iniciativa!</p>

      <S.SmileysContainer>
        <S.IconBox onClick={offerIconAction}>
          <S.OfferIcon />
          Ofereço carona
        </S.IconBox>
        <S.IconBox onClick={needIconAction}>
          <S.NeedIcon />
          Preciso de carona
        </S.IconBox>
      </S.SmileysContainer>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Destino</th>
              <th>Dias ou frequência</th>
            </tr>
          </thead>
          <tbody>
          {store.records.map((record) =>
            <tr>
              <td>{record.type}</td>
              <td>{record.destiny}</td>
              <td>{record.days}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </React.Fragment>
  );
});

export default Ride;
