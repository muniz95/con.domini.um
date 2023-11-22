import http from '../utils/http';
import Pet from '../models/Pet';

const url = `${process.env.REACT_APP_BASE_URL}/pets`;

export const getPets = async () => {
  const result = await http.get<Pet[]>(url);
  if (result) return result.map((item) => new Pet(item));
  return [];
}

export default {
  getPets,
};
