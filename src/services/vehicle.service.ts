import http from '../utils/http';
import Vehicle from '../models/Vehicle';

const url = `${process.env.REACT_APP_BASE_URL}/vehicles`;

export const getVehicles = async () => {
  const result = await http.get<Vehicle[]>(url);
  if (result) return result.map((item) => new Vehicle(item));
  return [];
}

export default {
  getVehicles,
};