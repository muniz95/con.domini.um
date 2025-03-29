import TabPanel from '@/components/tab-panel';
import { AppBar, Tab, Tabs } from '@mui/material';
import { SetStateAction, SyntheticEvent, useState } from 'react';
import global from '../../global.style';
import Occurrence from '../../models/Occurrence';
import { useGetOccurrences } from './api/get-occurrences';
import S from './styled';

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const Occurrences = () => {
  const { data } = useGetOccurrences();

  const [value, setValue] = useState(0);
  const myAds = (ad: Occurrence) => ad.createdBy === 'me';

  const handleChange = (
    _event: SyntheticEvent,
    newValue: SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <h2>Ocorrências</h2>
      <AppBar
        position="static"
        style={{ backgroundColor: global.primaryColor }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Lista de ocorrências" {...a11yProps(0)} />
          <Tab label="Nova ocorrência" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
    </>
  );
};

export default Occurrences;
