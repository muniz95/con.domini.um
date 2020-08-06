import { observer } from "mobx-react";
import React from "react";
import S from './styled';
import GalleryStore from './store';

const Gallery: React.FC<{}> = observer(() => {
  const store = React.useContext(GalleryStore);
  const getImage = (path: string) =>
    `${process.env.PUBLIC_URL}/assets/${path}.jpg`;

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Galeria de fotos</h2>

      <S.AdCardContainer>
        { store.albums.map((album) =>
          <S.AdCard key={album.id}>
            <S.AdCardHeader>
              <img src={getImage(album.cover)} alt={album.title}
                width="600px" height="400px" />
            </S.AdCardHeader>
            <S.AdCardBody>
              {album.title}
              {/* <S.AdCardTitle>{album.title}</S.AdCardTitle>
              <span>{album.date.toLocaleDateString("pt-BR")}</span> */}
            </S.AdCardBody>
          </S.AdCard>,
        ) }
      </S.AdCardContainer>
    </>
  );
});

export default Gallery;
