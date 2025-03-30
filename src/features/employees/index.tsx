import { useGetEmployees } from './api/get-employees';
import S from './styled';

const Employees = () => {
  const { data } = useGetEmployees();
  return (
    <>
      <h2>Veículos</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Função</th>
              <th>Entrada</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.photo}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.begin}</td>
                <td>{item.end}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Employees;
