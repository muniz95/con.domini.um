import http from '../utils/http';
import Assembly from '../models/Assembly';

const url = `${process.env.REACT_APP_BASE_URL}/assemblies`;

export const getAssemblies = async (token: string) => {
  const result = await http.get<Assembly[]>(url, token);
  if (result) return result.map((item) => new Assembly(item));
  return [];
}

export const postAssembly = async (item: Assembly, token: string) => {
  return await http.post<Assembly>(url, item, token);
}

export default {
  getAssemblies,
  postAssembly,
};
