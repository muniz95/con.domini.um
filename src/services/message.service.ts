import http from '../utils/http';
import Message from '../models/Message';

const url = process.env.REACT_APP_BASE_URL;

export const getMessages = async () => {
  return (await http.get<Message[]>(`${url}/messages`))
    .map((item) => new Message(item));
}

export default {
  getMessages,
};
