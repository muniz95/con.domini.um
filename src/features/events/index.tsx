import { useGetEvents } from './api/get-events';
import S from './styled';

const Events = () => {
  const { data } = useGetEvents();
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
            {data?.map((event) => (
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
};

export default Events;
