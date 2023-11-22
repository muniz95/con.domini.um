import http from '../utils/http';
import Notice from '../models/Notice';

const url = `${process.env.REACT_APP_BASE_URL}/notices`;

export const getNotices = async () => {
  const result = await http.get<Notice[]>(url);
  if (result) return result.map((item) => new Notice(item));
  return [];
}

export default {
  getNotices,
};
