import { Tabs } from '@mantine/core';
import { useState } from 'react';
import Occurrence from '../../models/Occurrence';
import { useGetOccurrences } from './api/get-occurrences';
import S from './styled';

const Occurrences = () => {
  const { data } = useGetOccurrences();

  const [value, setValue] = useState<string | null>('list');
  const myAds = (ad: Occurrence) => ad.createdBy === 'me';

  return (
    <>
      <h2>Ocorrências</h2>
      <Tabs
        value={value}
        onChange={setValue}
        color="brand"
        variant="outline"
        radius="sm"
      >
        <Tabs.List>
          <Tabs.Tab value="list">Lista de ocorrências</Tabs.Tab>
          <Tabs.Tab value="new">Nova ocorrência</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="list" pt="md">
          <S.SearchFieldContainer>
            <label htmlFor="search">Pesquisar:</label>
            <S.SearchField type="text" id="search" />
          </S.SearchFieldContainer>

          <S.AdCardContainer>
            {data?.map((item: Occurrence) => (
              <S.AdCard key={item.id}>
                <S.AdCardBody>
                  <S.AdCardTitle>{item.name}</S.AdCardTitle>
                  <span>{item.creationDate.toLocaleDateString('pt-BR')}</span>
                </S.AdCardBody>
              </S.AdCard>
            ))}
          </S.AdCardContainer>
        </Tabs.Panel>
        <Tabs.Panel value="new" pt="md">
          <S.AdCardContainer>
            {data?.filter(myAds).map((item: Occurrence) => (
              <S.AdCard key={item.id}>
                <S.AdCardBody>
                  <S.AdCardTitle>{item.name}</S.AdCardTitle>
                  <span>{item.creationDate.toLocaleDateString('pt-BR')}</span>
                </S.AdCardBody>
              </S.AdCard>
            ))}
          </S.AdCardContainer>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Occurrences;
