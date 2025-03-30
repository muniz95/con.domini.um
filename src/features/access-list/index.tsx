import { AccessRecord } from '../../models/AccessRecord';
import { useGetAccessList } from './api/get-access-list';
import S from './styled';

const AccessList = () => {
  const { data } = useGetAccessList();
  const temporary = (record: AccessRecord) => !record.permanent;
  const permanent = (record: AccessRecord) => record.permanent;

  return (
    <>
      <h2>Enquetes</h2>

      <S.Center>
        <h2>Acesso hoje</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>R.G.</th>
              <th>Parentesco</th>
              <th>Obs.</th>
            </tr>
          </thead>
          <tbody>
            {data?.filter(temporary).map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.rg}</td>
                <td>{record.kinship}</td>
                <td>{record.observation}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
      <S.Center>
        <h2>Acesso permanente</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>R.G.</th>
              <th>Parentesco</th>
              <th>Obs.</th>
            </tr>
          </thead>
          <tbody>
            {data?.filter(permanent).map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.rg}</td>
                <td>{record.kinship}</td>
                <td>{record.observation}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default AccessList;
