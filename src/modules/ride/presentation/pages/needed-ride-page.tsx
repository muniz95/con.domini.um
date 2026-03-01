import { Tabs } from '@mantine/core';
import { useState } from 'react';
import { useRideRecords } from '../hooks';
import FormOffer from '../components/form-offer';
import S from '../styles/ride.styled';

export default function NeededRidePage() {
  const { data: records } = useRideRecords();
  const [value, setValue] = useState<string | null>('need');

  const needed = records?.filter((r) => r.category === 'need') || [];

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
          <Tabs.Tab value="need">Preciso de carona</Tabs.Tab>
          <Tabs.Tab value="records">Registros</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="need" pt="md">
          <FormOffer />
        </Tabs.Panel>

        <Tabs.Panel value="records" pt="md">
          <S.Center>
            <S.Table>
              <thead>
                <tr>
                  <th>Destino</th>
                  <th>Dias</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {needed.map((item) => (
                  <tr key={item.id}>
                    <td>{item.destiny}</td>
                    <td>{item.days.join(', ')}</td>
                    <td>{item.phone}</td>
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
