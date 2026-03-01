import { Tabs } from '@mantine/core';
import { useState } from 'react';
import { useGetDocuments } from './api/get-documents';
import S from './styled';

const Documents = () => {
  const { data } = useGetDocuments();
  const [value, setValue] = useState<string | null>('documents');
  return (
    <>
      <h2>Documentos</h2>
      <Tabs
        value={value}
        onChange={setValue}
        color="brand"
        variant="outline"
        radius="sm"
      >
        <Tabs.List>
          <Tabs.Tab value="documents">Documentos</Tabs.Tab>
          <Tabs.Tab value="categories">Categorias</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="documents" pt="md">
          <S.AdCardContainer>
            {data?.map((item) => (
              <S.AdCard key={item.id}>
                <S.AdCardBody>
                  <S.AdCardTitle>{item.title}</S.AdCardTitle>
                  <span>{item.createdAt?.toLocaleDateString('pt-BR')}</span>
                </S.AdCardBody>
              </S.AdCard>
            ))}
          </S.AdCardContainer>
        </Tabs.Panel>
        <Tabs.Panel value="categories" pt="md">
          {/* <S.AdCardContainer>
          { data?.filter(myAds).map((item: SmallAd) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.name}</S.AdCardTitle>
                <span>{item.creationDate.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer> */}
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Documents;
