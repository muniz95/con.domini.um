import React from 'react';
import ProfileStore from './store';
import S from './styled';
import PersonalInfo from './_personalInfo';

const Profile = () => {
  const store = React.useContext(ProfileStore);

  React.useEffect(() => {
    store.fetchItem();
  }, [store]);
  return (
    <>
      <h2>Meu perfil</h2>

      <S.Center>
        <PersonalInfo {...store.user} />
      </S.Center>
    </>
  );
};

export default Profile;
