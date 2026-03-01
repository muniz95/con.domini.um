import { Tabs } from '@mantine/core';
import { useState } from 'react';
import SmallAd from '../../models/SmallAd';
import SmallAdForm from './_form';
import { useGetSmallAds } from './api/get-small-ads';
import S from './styled';

const SmallAds = () => {
  const { data } = useGetSmallAds();

  const [value, setValue] = useState<string | null>('ads');
  const myAds = (ad: SmallAd) => ad.createdBy === 'me';

  return (
    <>
      <h2>Classificados</h2>
      <Tabs
        value={value}
        onChange={setValue}
        color="brand"
        variant="outline"
        radius="sm"
      >
        <Tabs.List>
          <Tabs.Tab value="ads">Anúncios</Tabs.Tab>
          <Tabs.Tab value="my-ads">Meus anúncios</Tabs.Tab>
          <Tabs.Tab value="new-ad">Novo anúncio</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="ads" pt="md">
          <S.AdCardContainer>
            {data?.map((item: SmallAd) => (
              <S.AdCard key={item.id}>
                <S.AdCardBody>
                  <S.AdCardTitle>{item.name}</S.AdCardTitle>
                  <span>{item.creationDate.toLocaleDateString('pt-BR')}</span>
                </S.AdCardBody>
              </S.AdCard>
            ))}
          </S.AdCardContainer>
        </Tabs.Panel>
        <Tabs.Panel value="my-ads" pt="md">
          <S.AdCardContainer>
            {data?.filter(myAds).map((item: SmallAd) => (
              <S.AdCard key={item.id}>
                <S.AdCardBody>
                  <S.AdCardTitle>{item.name}</S.AdCardTitle>
                  <span>{item.creationDate.toLocaleDateString('pt-BR')}</span>
                </S.AdCardBody>
              </S.AdCard>
            ))}
          </S.AdCardContainer>
        </Tabs.Panel>
        <Tabs.Panel value="new-ad" pt="md">
          <SmallAdForm />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default SmallAds;
