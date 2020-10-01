import { observer } from "mobx-react";
import React from "react";
import { Tabs, AppBar, Tab, Box } from "@material-ui/core";
import DocumentsStore from './store';
import S from './styled';
import global from '../../global.style';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

const Documents: React.FC<{}> = observer(() => {
  const store = React.useContext(DocumentsStore);
  const [value, setValue] = React.useState(0);
  
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  return (
    <>
      <h2>Documentos</h2>
      <AppBar position="static" style={{backgroundColor: global.primaryColor}}>
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
          { store.documents.map((item) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.title}</S.AdCardTitle>
                <span>{item.createdAt?.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
    </>
  );
});

export default Documents;
