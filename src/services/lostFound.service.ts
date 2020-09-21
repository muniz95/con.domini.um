import http from '../utils/http';
import LostFoundItem from '../models/LostFoundItem';

const url = process.env.REACT_APP_BASE_URL;

export const getLostFoundItems = async () => {
  return (await http.get<LostFoundItem[]>(`${url}/lost_found_items`))
    .map((item) => new LostFoundItem(item));
}

export default {
  getLostFoundItems,
};
