import http from '../utils/http';
import Mail from '../models/Mail';

const url = `${process.env.REACT_APP_BASE_URL}/mail_records`;

export const getMails = async () => {
  const result = await http.get<Mail[]>(url);
  if (result) return result.map((item) => new Mail(item));
  return [];
};

export default {
  getMails,
};
