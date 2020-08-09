import { observer } from "mobx-react";
import React from "react";
import OccurrenceStore from './store';
import S from './styled';
import Occurrence from "../../models/Occurrence";
import { AppBar, Tabs, Box, Tab } from "@material-ui/core";
import global from '../../global.style';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Occurrences: React.FC<{}> = observer(() => {
  const store = React.useContext(OccurrenceStore);
  const [value, setValue] = React.useState(0);
  const myAds = (ad: Occurrence) => ad.createdBy === 'me';
  
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  
  return (
    <React.Fragment>
      <h2>Ocorrências</h2>
      <AppBar position="static" style={{backgroundColor: global.primaryColor}}>
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
          { store.occurrences.map((item: Occurrence) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.name}</S.AdCardTitle>
                <span>{item.creationDate.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <S.AdCardContainer>
          { store.occurrences.filter(myAds).map((item: Occurrence) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.name}</S.AdCardTitle>
                <span>{item.creationDate.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer>
      </TabPanel>
    </React.Fragment>
  );
});

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any; }) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default Occurrences;
