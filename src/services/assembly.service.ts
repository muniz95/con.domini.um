import http from '../utils/http';
import Assembly from '../models/Assembly';

const url = process.env.REACT_APP_BASE_URL;

export const getAssemblies = async (token: string) => {
  return (await http.get<Assembly[]>(`${url}/assemblies`, token))
    .map((item) => new Assembly(item));
}

export const postAssembly = async (item: Assembly, token: string) => {
  return await http.post<Assembly>(`${url}/assemblies`, item, token);
}

export default {
  getAssemblies,
  postAssembly,
};
