import { useGetPolls } from './api/get-polls';
import S from './styled';

const Polls = () => {
  const { data } = useGetPolls();
  return (
    <>
      <h2>Votações</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Encerramento</th>
              <th>Votou</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.closingDate?.toLocaleDateString('pt-br')}</td>
                <td>{item.voted ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Polls;
