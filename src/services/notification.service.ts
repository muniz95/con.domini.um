import http from '../utils/http';
import Notification from '../models/Notification';

const url = process.env.REACT_APP_BASE_URL;

export const getNotifications = async () => {
  return (await http.get<Notification[]>(`${url}/notifications`))
    .map((item) => new Notification(item));
}

export default {
  getNotifications,
};
