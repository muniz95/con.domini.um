import http from '../utils/http';
import BrigadeMember from '../models/BrigadeMember';

const url = process.env.REACT_APP_BASE_URL;

export const getFirefighters = async () => {
  return (await http.get<BrigadeMember[]>(`${url}/firefighters`))
    .map((item) => new BrigadeMember(item));
}

export default {
  getFirefighters,
};
