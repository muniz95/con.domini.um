import { Tabs } from '@mantine/core';
import React, { useState } from 'react';
import Message from '../../models/Message';
import { useGetMessages } from './api/get-messages';
import S from './styled';

const Messages = () => {
  const { data } = useGetMessages();
  const [value, setValue] = useState<string | null>('inbox');
  const sentToMe = (item: Message) => item.to === 'Morador';
  const sentByMe = (item: Message) => item.from === 'Morador';

  return (
    <>
      <h2>Message</h2>
      <Tabs
        value={value}
        onChange={setValue}
        color="brand"
        variant="outline"
        radius="sm"
      >
        <Tabs.List>
          <Tabs.Tab value="inbox">Caixa de entrada</Tabs.Tab>
          <Tabs.Tab value="sent">Enviadas</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="inbox" pt="md">
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
        </Tabs.Panel>

        <Tabs.Panel value="sent" pt="md">
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
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Messages;
