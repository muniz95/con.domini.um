import http from '../utils/http';
import Document from '../models/Document';

const url = `${process.env.REACT_APP_BASE_URL}/documents`;

export const getDocuments = async () => {
  const result = await http.get<Document[]>(url);
  if (result) return result.map((item) => new Document(item));
  return [];
};

export default {
  getDocuments,
};
