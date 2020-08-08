import { observer } from "mobx-react";
import React from "react";
import MessagesStore from './store';
import S from './styled';
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import global from '../../global.style';
import Message from "../../models/Message";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Messages: React.FC<{}> = observer(() => {
  const store = React.useContext(MessagesStore);
  const [value, setValue] = React.useState(0);
  const sentToMe = (item: Message) => item.to === 'Morador';
  const sentByMe = (item: Message) => item.from === 'Morador';
  
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  
  return (
    <React.Fragment>
      <h2>Message</h2>
      <AppBar position="static" style={{backgroundColor: global.primaryColor}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Barra de anúncios"
        >
          <Tab label="Caixa de entrada" {...a11yProps(0)} />
          <Tab label="Enviadas" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <S.AdCardContainer>
          { store.messages.filter(sentToMe).map((item) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.from}</S.AdCardTitle>
                <span>{item.deliveredAt?.toLocaleDateString("pt-BR")}</span>
              </S.AdCardBody>
            </S.AdCard>,
          ) }
        </S.AdCardContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <S.AdCardContainer>
          { store.messages.filter(sentByMe).map((item) =>
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.to}</S.AdCardTitle>
                <span>{item.deliveredAt?.toLocaleDateString("pt-BR")}</span>
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

export default Messages;
