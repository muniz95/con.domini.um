import http from '../utils/http';
import Providence from '../models/Providence';

const url = `${process.env.REACT_APP_BASE_URL}/providences`;

export const getProvidences = async () => {
  const result = await http.get<Providence[]>(url);
  if (result) return result.map((item) => new Providence(item));
  return [];
}

export default {
  getProvidences,
};
