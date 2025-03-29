import http from '../utils/http';
import BrigadeMember from '../models/BrigadeMember';

const url = `${process.env.REACT_APP_BASE_URL}/firefighters`;

export const getFirefighters = async (token: string) => {
  const result = await http.get<BrigadeMember[]>(url, token);
  if (result) return result.map((item) => new BrigadeMember(item));
  return [];
};

export const postFirefighter = async (item: BrigadeMember, token: string) => {
  return await http.post<BrigadeMember>(url, item, token);
};

export const putFirefighter = async (item: BrigadeMember, token: string) => {
  return await http.put<BrigadeMember>(url, item, token);
};

export const removeFirefighter = async (id: number, token: string) => {
  return await http.remove(url, id, token);
};

export default {
  getFirefighters,
  postFirefighter,
  putFirefighter,
  removeFirefighter,
};
