import TabPanel from '@/components/tab-panel';
import { AppBar, Tab, Tabs } from '@mui/material';
import { SetStateAction, SyntheticEvent, useState } from 'react';
import global from '../../global.style';
import SmallAd from '../../models/SmallAd';
import SmallAdForm from './_form';
import { useGetSmallAds } from './api/get-small-ads';
import S from './styled';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SmallAds = () => {
  const { data } = useGetSmallAds();

  const [value, setValue] = useState(0);
  const myAds = (ad: SmallAd) => ad.createdBy === 'me';

  const handleChange = (
    _event: SyntheticEvent,
    newValue: SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <h2>Classificados</h2>
      <AppBar
        position="static"
        style={{ backgroundColor: global.primaryColor }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab title="Anúncios" {...a11yProps(0)} />
          <Tab title="Meus anúncios" {...a11yProps(1)} />
          <Tab title="Novo anúncio" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SmallAdForm />
      </TabPanel>
    </>
  );
};

export default SmallAds;
