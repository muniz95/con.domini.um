import http from '../utils/http';
import Provider from '../models/ProviderRecord';

const url = process.env.REACT_APP_BASE_URL;

export const getProviders = async () => {
  return (await http.get<Provider[]>(`${url}/providers`))
    .map((item) => new Provider(item));
}

export default {
  getProviders,
};