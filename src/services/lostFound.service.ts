import http from '../utils/http';
import LostFoundItem from '../models/LostFoundItem';

const url = `${process.env.REACT_APP_BASE_URL}/lost_found_items`;

export const getLostFoundItems = async (token: string) => {
  const result = await http.get<LostFoundItem[]>(url, token);
  if (result) return result.map((item) => new LostFoundItem(item));
  return [];
};

export const post = async (item: LostFoundItem, token: string) => {
  const result = await http.post(url, item, token);
  console.log('post result', result);
};

export default {
  getLostFoundItems,
  post,
};
