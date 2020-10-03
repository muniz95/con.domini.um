import http from '../utils/http';
import Poll from '../models/Poll';

const url = process.env.REACT_APP_BASE_URL;

export const getPolls = async () => {
  return (await http.get<Poll[]>(`${url}/polls`))
    .map((item) => new Poll(item));
}

export default {
  getPolls,
};