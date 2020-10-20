import http from '../utils/http';
import RideRecord from '../models/RideRecord';

const baseUrl = process.env.REACT_APP_BASE_URL;
const path = 'rides';
const url = `${baseUrl}/${path}`;

export const getRides = async (token: string) => {
  return (await http.get<RideRecord[]>(url, token))
    .map((item) => new RideRecord(item));
}

export const post = async (item: RideRecord, token: string) => {
  const result = await http.post(url, item, token);
  console.log('post result', result);
}

export default {
  getRides,
  post,
};
