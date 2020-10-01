import http from '../utils/http';
import Mail from '../models/Mail';

const url = process.env.REACT_APP_BASE_URL;

export const getMails = async () => {
  return (await http.get<Mail[]>(`${url}/mail_records`))
    .map((item) => new Mail(item));
}

export default {
  getMails,
};
