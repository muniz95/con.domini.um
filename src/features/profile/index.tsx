import PersonalInfo from './_personal-info';
import { useGetProfile } from './api/get-profile';
import S from './styled';

const Profile = () => {
  const { data } = useGetProfile();
  return (
    <>
      <h2>Meu perfil</h2>

      <S.Center>
        <PersonalInfo {...data!} />
      </S.Center>
    </>
  );
};

export default Profile;
