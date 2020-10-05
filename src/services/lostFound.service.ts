import http from '../utils/http';
import LostFoundItem from '../models/LostFoundItem';

const baseUrl = process.env.REACT_APP_BASE_URL;
const path = 'lost_found_items';
const url = `${baseUrl}/${path}`;

export const getLostFoundItems = async (token: string) => {
  return (await http.get<LostFoundItem[]>(url, token))
    .map((item) => new LostFoundItem(item));
}

export const post = async (item: LostFoundItem, token: string) => {
  const result = await http.post(url, item, token);
  console.log('post result', result);
}

export default {
  getLostFoundItems,
  post,
};
