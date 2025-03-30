import { useGetUnitVehicles } from './api/get-unit-vehicles';
import S from './styled';

const Vehicles = () => {
  const { data } = useGetUnitVehicles();

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
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.plate}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.color}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
    </>
  );
};

export default Vehicles;
