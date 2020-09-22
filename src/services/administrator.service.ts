import http from '../utils/http';
import Administrator from '../models/Administrator';

const url = process.env.REACT_APP_BASE_URL;

export const getAdministrators = async () => {
  return (await http.get<Administrator[]>(`${url}/administrators`))
    .map((item) => new Administrator(item));
}

export default {
  getAdministrators,
};
