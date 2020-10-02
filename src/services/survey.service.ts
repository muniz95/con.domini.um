import http from '../utils/http';
import Survey from '../models/Survey';

const url = process.env.REACT_APP_BASE_URL;

export const getSurveys = async () => {
  return (await http.get<Survey[]>(`${url}/surveys`))
    .map((item) => new Survey(item));
}

export default {
  getSurveys,
};
