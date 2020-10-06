import http from '../utils/http';
import Administrator from '../models/Administrator';

const url = process.env.REACT_APP_BASE_URL;

export const getAdministrators = async (token: string) => {
  return (await http.get<Administrator[]>(`${url}/administrators`, token))
    .map((item) => new Administrator(item));
}

export const postAdministrator = async (item: Administrator, token: string) => {
  return await http.post<Administrator>(`${url}/administrators`, item, token);
}

export default {
  getAdministrators,
  postAdministrator,
};
