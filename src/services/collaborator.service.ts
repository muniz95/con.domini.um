import http from '../utils/http';
import Collaborator from '../models/Collaborator';

const url = `${process.env.REACT_APP_BASE_URL}/collaborators`;

export const getCollaborators = async () => {
  const result = await http.get<Collaborator[]>(url);
  if (result) return result.map((item) => new Collaborator(item));
  return [];
};

export default {
  getCollaborators,
};
