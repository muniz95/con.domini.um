import { observer } from 'mobx-react';
import React from 'react';
import S from './styled';
import EventsStore from './store';

const Events: React.FC<{}> = observer(() => {
  const store = React.useContext(EventsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Eventos</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Local</th>
              <th>Data</th>
              <th>Presença</th>
            </tr>
          </thead>
          <tbody>
            {store.events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.local}</td>
                <td>{event.date?.toLocaleDateString('pt-br')}</td>
                <td>{event.attending ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Events;
