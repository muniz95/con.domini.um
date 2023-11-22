import http from '../utils/http';
import Notification from '../models/Notification';

const url = `${process.env.REACT_APP_BASE_URL}/notifications`;

export const getNotifications = async () => {
  const result = await http.get<Notification[]>(url);
  if (result) return result.map((item) => new Notification(item));
  return [];
}

export default {
  getNotifications,
};
