import { useGetPets } from './api/get-pets';
import S from './styled';

const Pets = () => {
  const { data } = useGetPets();

  return (
    <>
      <h2>Meus pets</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Raça</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.race}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Pets;
