import { AppBar, Box, Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { useGetDocuments } from './api/get-documents';
import S from './styled';

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const TabPanel = (props: {
  children?: React.ReactNode;
  value: number;
  index: number;
}) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Documents = () => {
  const { data } = useGetDocuments();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: SyntheticEvent,
    newValue: React.SetStateAction<number>
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <h2>Documentos</h2>
      <AppBar position="static" style={{ backgroundColor: '#faa473' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Documentos" {...a11yProps(0)} />
          <Tab label="Categorias" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
    </>
  );
};

export default Documents;
