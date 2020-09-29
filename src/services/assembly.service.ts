import http from '../utils/http';
import Assembly from '../models/Assembly';

const url = process.env.REACT_APP_BASE_URL;

export const getAssemblies = async () => {
  return (await http.get<Assembly[]>(`${url}/assemblies`))
    .map((item) => new Assembly(item));
}

export default {
  getAssemblies,
};
