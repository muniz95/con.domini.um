import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetRideRecords } from './api/get-ride-records';
import S from './styled';

const Ride = () => {
  const { data } = useGetRideRecords();
  const [fieldVisible, setFieldVisible] = useState(false);
  const [, setSelectedIcon] = useState('');
  const navigate = useNavigate();
  const offerIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon('condomínio');
    navigate('/ride/offer');
  };
  const needIconAction = () => {
    if (!fieldVisible) {
      setFieldVisible(true);
    }
    setSelectedIcon('website');
    navigate('/ride/needed');
  };

  return (
    <>
      <h2>Carona solidária</h2>
      <p>
        A carona solidária tem o objetivo de unir os moradores para melhorar o
        trânsito e o ar das cidades.
      </p>
      <p>
        Além de você, várias pessoas que moram em seu condomínio provavelmente
        têm as mesmas necessidades de locomoção. Locais em comum como: escola
        das crianças, trabalho e família no interior são os mais comuns.
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
            {data?.map((record) => (
              <tr key={record.id}>
                <td>{record.category}</td>
                <td>{record.destiny}</td>
                <td>{record.days}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Ride;
