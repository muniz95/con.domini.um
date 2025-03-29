
import React from 'react';
import LostFoundItem from '../../models/LostFoundItem';
import LostFoundStore from './store';
import Store from '../../store';
import S from './styled';
import LostFoundItemForm from './_form';

const LostFound: React.FC = observer(() => {
  const store = React.useContext(LostFoundStore);
  const rootStore = React.useContext(Store);
  const [itemCategory, setItemCategory] = React.useState<string>('');
  const itemLabel: any = {
    found: 'encontrou',
    lost: 'perdeu',
  };
  const handleFoundClick = () => setItemCategory('found');
  const handleLostClick = () => setItemCategory('lost');

  React.useEffect(() => {
    store.fetchItems(rootStore.jwt);
  }, [store]);

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
        {store.items.map((item: LostFoundItem) => (
          <S.ItemCard key={item.id}>
            <S.ItemCardBody>
              <h2>{item.name}</h2>
              <h6>{item.createdAt}</h6>
            </S.ItemCardBody>
          </S.ItemCard>
        ))}
      </S.ItemCardContainer>
    </React.Fragment>
  );
};

export default LostFound;
