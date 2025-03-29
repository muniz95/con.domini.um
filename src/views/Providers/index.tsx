import React from 'react';
import ProviderListStore from './store';
import S from './styled';
import { Fab } from '@mui/material';

const Providers = () => {
  const store = React.useContext(ProviderListStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Prestadores de serviços</h2>

      <S.Center>
        <h2>Acesso hoje</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Horário</th>
              <th>Morador presente?</th>
              <th>Motivo</th>
              <th>Obs.</th>
              <th>R.G.</th>
            </tr>
          </thead>
          <tbody>
            {store.records.map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.date?.toLocaleTimeString('pt-br')}</td>
                <td>{record.ownerAtHome ? 'Sim' : 'Não'}</td>
                <td>{record.reason}</td>
                <td>{record.observation}</td>
                <td>{record.rg}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
      <Fab>+</Fab>
    </>
  );
};

export default Providers;
