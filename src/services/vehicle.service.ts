import http from '../utils/http';
import Vehicle from '../models/Vehicle';

const url = process.env.REACT_APP_BASE_URL;

export const getVehicles = async () => {
  return (await http.get<Vehicle[]>(`${url}/vehicles`))
    .map((item) => new Vehicle(item));
}

export default {
  getVehicles,
};