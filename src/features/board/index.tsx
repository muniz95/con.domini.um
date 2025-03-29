import { useGetNotices } from './api/get-notices';
import S from './styled';

const Board = () => {
  const { data } = useGetNotices();

  return (
    <>
      <h2>Quadro de avisos</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.date?.toLocaleDateString('pt-br')}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Board;
