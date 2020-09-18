import http from '../utils/http';
import User from '../models/User';

const url = process.env.REACT_APP_BASE_URL;

export interface AuthenticableUser extends User {
  jti: string;
};

export const authenticate = async (email: string, password: string) => {
  const body = { user: { email, password } };
  return await http.fullPost(`${url}/login`, body);
}

export default {
  authenticate,
};