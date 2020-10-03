import { observer } from "mobx-react";
import React from "react";
import NotificationsStore from './store';
import S from './styled';

const Notifications: React.FC<{}> = observer(() => {
  const store = React.useContext(NotificationsStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Notificações</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
          {store.notifications.map((survey) =>
            <tr key={survey.id}>
              <td>{survey.category}</td>
              <td>{survey.date?.toLocaleDateString('pt-br')}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Notifications;
