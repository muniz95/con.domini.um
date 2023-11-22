import http from '../utils/http';
import Administrator from '../models/Administrator';

const url = `${process.env.REACT_APP_BASE_URL}/administrators`;

export const getAdministrators = async (token: string) => {
  const result = await http.get<Administrator[]>(url, token);
  if (result) return result.map((item) => new Administrator(item));
  return [];
}

export const postAdministrator = async (item: Administrator, token: string) => {
  return await http.post<Administrator>(url, item, token);
}

export default {
  getAdministrators,
  postAdministrator,
};
