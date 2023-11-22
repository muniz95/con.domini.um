import http from '../utils/http';
import Event from '../models/Event';

const url = `${process.env.REACT_APP_BASE_URL}/events`;

export const getEvents = async () => {
  const result = await http.get<Event[]>(url);
  if (result) return result.map((item) => new Event(item));
  return [];
}

export default {
  getEvents,
};
