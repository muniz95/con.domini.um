import http from '../utils/http';
import BrigadeMember from '../models/BrigadeMember';

const url = process.env.REACT_APP_BASE_URL;

export const getFirefighters = async (token: string) => {
  return (await http.get<BrigadeMember[]>(`${url}/firefighters`, token))
    .map((item) => new BrigadeMember(item));
}

export const postFirefighter = async (item: BrigadeMember, token: string) => {
  return await http.post<BrigadeMember>(`${url}/firefighters`, item, token);
}

export default {
  getFirefighters,
  postFirefighter,
};
