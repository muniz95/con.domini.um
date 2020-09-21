import http from '../utils/http';
import Dweller from '../models/Dweller';

const url = process.env.REACT_APP_BASE_URL;

export const getDwellers = async () => {
  return (await http.get<Dweller[]>(`${url}/dwellers`))
    .map((item) => new Dweller(item));
}

export default {
  getDwellers,
};