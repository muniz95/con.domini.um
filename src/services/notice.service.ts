import http from '../utils/http';
import Notice from '../models/Notice';

const url = process.env.REACT_APP_BASE_URL;

export const getNotices = async () => {
  return (await http.get<Notice[]>(`${url}/notices`))
    .map((item) => new Notice(item));
}

export default {
  getNotices,
};
