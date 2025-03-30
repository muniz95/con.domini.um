import { useGetUnitDwellers } from './api/get-unit-dwellers';
import S from './styled';

const Unit = () => {
  const { data } = useGetUnitDwellers();
  return (
    <>
      <h2>Minha unidade</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>Parentesco</th>
              <th>Idade</th>
              <th>Restrição de mobiidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.rg}</td>
                <td>{item.kinship}</td>
                <td>{item.birthdate.toLocaleDateString('pt-br')}</td>
                <td>{item.mobilityRestriction ? 'Sim' : 'Não'}</td>
                <td>
                  <button>+</button>
                  <button>/</button>
                  <button>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Unit;
