import { useGetCollaborators } from './api/get-collaborators';
import S from './styled';

const Collaborators = () => {
  const { data } = useGetCollaborators();

  return (
    <>
      <h2>Colaboradores</h2>
      <S.Center>
        <S.Table>
          {data?.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.role}</td>
              <td>{record.startWork}</td>
              <td>{record.endWork}</td>
            </tr>
          ))}
        </S.Table>
      </S.Center>
    </>
  );
};

export default Collaborators;
