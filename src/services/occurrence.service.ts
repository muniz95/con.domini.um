import http from '../utils/http';
import Occurrence from '../models/Occurrence';

const url = process.env.REACT_APP_BASE_URL;

export const getOccurrences = async () => {
  return (await http.get<Occurrence[]>(`${url}/occurrences`))
    .map((item) => new Occurrence(item));
}

export default {
  getOccurrences,
};
