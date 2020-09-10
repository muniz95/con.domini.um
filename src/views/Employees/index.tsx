import { observer } from "mobx-react";
import React from "react";
import EmployeesStore from './store';
import S from './styled';

const Employees: React.FC<{}> = observer(() => {
  const store = React.useContext(EmployeesStore);

  React.useEffect(() => {
    store.fetchItems();
  }, [store]);
  return (
    <>
      <h2>Veículos</h2>

      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Função</th>
              <th>Entrada</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
          {store.employees.map((item) =>
            <tr key={item.id}>
              <td>{item.photo}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.begin}</td>
              <td>{item.end}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Employees;
