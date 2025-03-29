import TabPanel from '@/components/tab-panel';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { SetStateAction, SyntheticEvent, useState } from 'react';
import global from '../../global.style';
import Message from '../../models/Message';
import { useGetMessages } from './api/get-messages';
import S from './styled';

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const Messages = () => {
  const { data } = useGetMessages();
  const [value, setValue] = useState(0);
  const sentToMe = (item: Message) => item.to === 'Morador';
  const sentByMe = (item: Message) => item.from === 'Morador';

  const handleChange = (
    _event: SyntheticEvent,
    newValue: SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <h2>Message</h2>
      <AppBar
        position="static"
        style={{ backgroundColor: global.primaryColor }}
      >
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
          {data?.filter(sentToMe).map((item) => (
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.from}</S.AdCardTitle>
                <span>{item.deliveredAt?.toLocaleDateString('pt-BR')}</span>
              </S.AdCardBody>
            </S.AdCard>
          ))}
        </S.AdCardContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <S.AdCardContainer>
          {data?.filter(sentByMe).map((item) => (
            <S.AdCard key={item.id}>
              <S.AdCardBody>
                <S.AdCardTitle>{item.to}</S.AdCardTitle>
                <span>{item.deliveredAt?.toLocaleDateString('pt-BR')}</span>
              </S.AdCardBody>
            </S.AdCard>
          ))}
        </S.AdCardContainer>
      </TabPanel>
    </>
  );
};

export default Messages;
