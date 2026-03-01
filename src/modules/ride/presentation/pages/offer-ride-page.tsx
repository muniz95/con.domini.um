import { Tabs } from '@mantine/core';
import { useState } from 'react';
import { useRideRecords } from '../hooks';
import FormOffer from '../components/form-offer';
import S from '../styles/ride.styled';

export default function OfferRidePage() {
  const { data: records } = useRideRecords();
  const [value, setValue] = useState<string | null>('offer');

  const offers = records?.filter((r) => r.category === 'offer') || [];

  return (
    <>
      <Tabs
        value={value}
        onChange={setValue}
        color="brand"
        variant="outline"
        radius="sm"
      >
        <Tabs.List>
          <Tabs.Tab value="offer">Ofereço carona</Tabs.Tab>
          <Tabs.Tab value="records">Registros</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="offer" pt="md">
          <FormOffer />
        </Tabs.Panel>

        <Tabs.Panel value="records" pt="md">
          <S.Center>
            <S.Table>
              <thead>
                <tr>
                  <th>Destino</th>
                  <th>Dias</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((item) => (
                  <tr key={item.id}>
                    <td>{item.destiny}</td>
                    <td>{item.days.join(', ')}</td>
                    <td>{item.departure}</td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.Center>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
