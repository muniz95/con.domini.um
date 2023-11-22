import http from '../utils/http';
import Provider from '../models/ProviderRecord';

const url = `${process.env.REACT_APP_BASE_URL}/providers`;

export const getProviders = async () => {
  const result = await http.get<Provider[]>(url);
  if (result) return result.map((item) => new Provider(item));
  return [];
}

export default {
  getProviders,
};