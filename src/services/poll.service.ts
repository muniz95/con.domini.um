import http from '../utils/http';
import Poll from '../models/Poll';

const url = `${process.env.REACT_APP_BASE_URL}/polls`;

export const getPolls = async () => {
  const result = await http.get<Poll[]>(url);
  if (result) return result.map((item) => new Poll(item));
  return [];
}

export default {
  getPolls,
};