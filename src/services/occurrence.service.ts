import http from '../utils/http';
import Occurrence from '../models/Occurrence';

const url = `${process.env.REACT_APP_BASE_URL}/occurrences`;

export const getOccurrences = async () => {
  const result = await http.get<Occurrence[]>(url);
  if (result) return result.map((item) => new Occurrence(item));
  return [];
}

export default {
  getOccurrences,
};
