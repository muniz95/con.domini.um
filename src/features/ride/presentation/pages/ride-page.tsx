import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRideRecords } from '../hooks';
import * as S from '../styles/ride.styled';

export default function RidePage() {
  const { data: records, isLoading, error } = useRideRecords();
  const navigate = useNavigate();
  const [, setSelectedIcon] = useState('');

  const offerIconAction = () => {
    setSelectedIcon('offer');
    navigate('/ride/offer');
  };

  const needIconAction = () => {
    setSelectedIcon('need');
    navigate('/ride/needed');
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar caronas</div>;

  return (
    <>
      <h2>Carona solidária</h2>
      <p>
        A carona solidária tem o objetivo de unir os moradores para melhorar o
        trânsito e o ar das cidades.
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
            {records?.map((record) => (
              <tr key={record.id}>
                <td>{record.category}</td>
                <td>{record.destiny}</td>
                <td>{record.days.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
}
