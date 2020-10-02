import http from '../utils/http';
import AccessRecord from '../models/AccessRecord';

const url = process.env.REACT_APP_BASE_URL;

export const getAccessRecords = async () => {
  return (await http.get<AccessRecord[]>(`${url}/access_lists`))
    .map((item) => new AccessRecord(item));
}

export default {
  getAccessRecords,
};
