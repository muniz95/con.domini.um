import http from '../utils/http';
import Document from '../models/Document';

const url = process.env.REACT_APP_BASE_URL;

export const getDocuments = async () => {
  return (await http.get<Document[]>(`${url}/documents`))
    .map((item) => new Document(item));
}

export default {
  getDocuments,
};
