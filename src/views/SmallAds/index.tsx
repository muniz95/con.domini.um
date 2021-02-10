import { observer } from "mobx-react";
import React from "react";
import S from "./styled";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import SmallAd from "../../models/SmallAd";
import SmallAdStore from "./store";
import global from '../../global.style';
import SmallAdForm from "./_form";
import { FormControl, Input, InputLabel } from "@material-ui/core";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SmallAds: React.FC<{}> = observer(() => {
  const store = React.useContext(SmallAdStore);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const myAds = (ad: SmallAd) => ad.createdBy === 'me';
  
  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  
  return (
    <React.Fragment>
      <h2>Classificados</h2>
      <AppBar position="static" style={{backgroundColor: global.primaryColor}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Anúncios" {...a11yProps(0)} />
          <Tab label="Meus anúncios" {...a11yProps(1)} />
          <Tab label="Novo anúncio" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <S.AdCardContainer>
          { store.items.map((item: SmallAd) =>
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
          { store.items.filter(myAds).map((item: SmallAd) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.name}</S.AdCardTitle>
                <span>{item.creationDate.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SmallAdForm />
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

export default SmallAds;
