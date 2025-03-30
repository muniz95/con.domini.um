import { useGetProvidences } from './api/get-providences';
import S from './styled';

const Providences = () => {
  const { data } = useGetProvidences();
  return (
    <>
      <h2>Obras & Providências</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Obra</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.details}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Providences;
