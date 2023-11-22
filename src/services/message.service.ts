import http from '../utils/http';
import Message from '../models/Message';

const url = `${process.env.REACT_APP_BASE_URL}/messages`;

export const getMessages = async () => {
  const result = await http.get<Message[]>(url);
  if (result) return result.map((item) => new Message(item));
  return [];
}

export default {
  getMessages,
};
