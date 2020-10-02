import http from '../utils/http';
import Event from '../models/Event';

const url = process.env.REACT_APP_BASE_URL;

export const getEvents = async () => {
  return (await http.get<Event[]>(`${url}/events`))
    .map((item) => new Event(item));
}

export default {
  getEvents,
};
