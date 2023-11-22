import http from '../utils/http';
import AccessRecord from '../models/AccessRecord';

const url = `${process.env.REACT_APP_BASE_URL}/access_lists`;

export const getAccessRecords = async () => {
  const result = await http.get<AccessRecord[]>(url);
  if (result) return result.map((item) => new AccessRecord(item));
  return [];
}

export default {
  getAccessRecords,
};
