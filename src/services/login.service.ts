import http from '../utils/http';
import User from '../models/User';

const url = process.env.REACT_APP_BASE_URL;

export const authenticate = async (email: string, password: string) => {
  const body = { user: { email, password } };
  // const body = { login, password };
  return await http.post<User>(`${url}/login`, body);
}

export default {
  authenticate,
};