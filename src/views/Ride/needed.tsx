import { AppBar, Tabs, Tab, Box } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import RideStore from './store';
import FormNeeded from './formNeeded';
// import S from "./styled";
import global from '../../global.style';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabPanel = (props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
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

const NeededRide: React.FC<{}> = observer(() => {
  const store = React.useContext(RideStore);
  const [value, setValue] = React.useState(0);
  // const [fieldVisible, setFieldVisible] = React.useState(false);
  // const [, setSelectedIcon] = React.useState("");
  // const offerIconAction = () => {
  //   if (!fieldVisible) {
  //     setFieldVisible(true);
  //   }
  //   setSelectedIcon("condomínio");
  // };
  // const needIconAction = () => {
  //   if (!fieldVisible) {
  //     setFieldVisible(true);
  //   }
  //   setSelectedIcon("website");
  // };

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{ backgroundColor: global.primaryColor }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Registros" {...a11yProps(0)} />
          <Tab label="Solicitar carona" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Destino</td>
              <td>Dia ou frequência</td>
            </tr>
          </thead>
          <tbody>
            {store.records.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.destiny}</td>
                <td>{item.dayOrFrequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormNeeded />
        {/* <S.AdCardContainer>
          { store.documents.filter(myAds).map((item: SmallAd) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.name}</S.AdCardTitle>
                <span>{item.creationDate.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer> */}
      </TabPanel>
    </React.Fragment>
  );
});

export default NeededRide;
