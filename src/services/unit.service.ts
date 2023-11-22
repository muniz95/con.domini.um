import http from '../utils/http';
import Dweller from '../models/Dweller';

const url = `${process.env.REACT_APP_BASE_URL}/dwellers`;

export const getDwellers = async () => {
  const result = await http.get<Dweller[]>(url);
  if (result) return result.map((item) => new Dweller(item));
  return [];
}

export default {
  getDwellers,
};