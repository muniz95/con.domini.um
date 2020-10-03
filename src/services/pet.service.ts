import http from '../utils/http';
import Pet from '../models/Pet';

const url = process.env.REACT_APP_BASE_URL;

export const getPets = async () => {
  return (await http.get<Pet[]>(`${url}/pets`))
    .map((item) => new Pet(item));
}

export default {
  getPets,
};
