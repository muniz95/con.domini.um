import http from '../utils/http';
import Collaborator from '../models/Collaborator';

const url = process.env.REACT_APP_BASE_URL;

export const getCollaborators = async () => {
  return (await http.get<Collaborator[]>(`${url}/collaborators`))
    .map((item) => new Collaborator(item));
}

export default {
  getCollaborators,
};
