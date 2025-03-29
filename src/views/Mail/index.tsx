import React from 'react';
import MailStore from './store';
import S from './styled';

const Mail = () => {
  const store = React.useContext(MailStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

  return (
    <>
      <h2>Correspondências</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Descrição</th>
              <th>Recebido em</th>
              <th>Entregue em</th>
            </tr>
          </thead>
          <tbody>
            {store.items.map((record) => (
              <tr key={record.id}>
                <td>{record.unit}</td>
                <td>{record.description}</td>
                <td>{record.receivedAt?.toLocaleDateString()}</td>
                <td>{record.deliveredAt?.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Mail;
