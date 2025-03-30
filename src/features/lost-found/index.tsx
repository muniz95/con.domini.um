import React from 'react';
import LostFoundItemForm from './_form';
import { useGetLostFoundItems } from './api/get-lost-found-items';
import S from './styled';

const LostFound = () => {
  const { data } = useGetLostFoundItems();
  const [itemCategory, setItemCategory] = React.useState<string>('');
  const itemLabel = {
    found: 'encontrou',
    lost: 'perdeu',
  };
  const handleFoundClick = () => setItemCategory('found');
  const handleLostClick = () => setItemCategory('lost');

  return (
    <React.Fragment>
      <h2>Achados & perdidos</h2>
      <p>
        Comunique perdas ou avise se porventura encontrar objetos ou valores nas
        dependências do condomínio.
      </p>
      <p>Pratique a cidadania!</p>

      <S.SmileysContainer>
        <S.EmojiBox onClick={() => handleFoundClick()}>
          <S.HappyEmoji />
          Achei
        </S.EmojiBox>
        <S.EmojiBox onClick={() => handleLostClick()}>
          <S.SadEmoji />
          Perdi
        </S.EmojiBox>
      </S.SmileysContainer>

      {itemCategory !== '' && (
        <LostFoundItemForm itemLabel={itemLabel} itemCategory={itemCategory} />
      )}

      <S.ItemCardContainer>
        {data?.map((item) => (
          <S.ItemCard key={item.id}>
            <S.ItemCardBody>
              <h2>{item.name}</h2>
              <h6>{item.creationDate.toLocaleDateString('pt-br')}</h6>
            </S.ItemCardBody>
          </S.ItemCard>
        ))}
      </S.ItemCardContainer>
    </React.Fragment>
  );
};

export default LostFound;
