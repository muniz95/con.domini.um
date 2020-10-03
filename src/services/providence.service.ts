import http from '../utils/http';
import Providence from '../models/Providence';

const url = process.env.REACT_APP_BASE_URL;

export const getProvidences = async () => {
  return (await http.get<Providence[]>(`${url}/providences`))
    .map((item) => new Providence(item));
}

export default {
  getProvidences,
};
