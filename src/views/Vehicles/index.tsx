import { observer } from "mobx-react";
import React from "react";
import VehiclesStore from './store';
import S from './styled';

const Vehicles: React.FC<{}> = observer(() => {
  const store = React.useContext(VehiclesStore);

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
              <th>Placa</th>
              <th>Tipo</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
          {store.vehicles.map((item) =>
            <tr key={item.id}>
              <td>{item.plate}</td>
              <td>{item.vehicleType}</td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.color}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
});

export default Vehicles;
