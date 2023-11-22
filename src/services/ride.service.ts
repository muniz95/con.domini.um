import http from '../utils/http';
import RideRecord from '../models/RideRecord';

const url = `${process.env.REACT_APP_BASE_URL}/rides`;

export const getRides = async (token: string) => {
  const result = await http.get<RideRecord[]>(url, token);
  if (result) return result.map((item) => new RideRecord(item));
  return [];
}

export const post = async (item: RideRecord, token: string) => {
  const result = await http.post(url, item, token);
  console.log('post result', result);
}

export default {
  getRides,
  post,
};
