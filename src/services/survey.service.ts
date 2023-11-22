import http from '../utils/http';
import Survey from '../models/Survey';

const url = `${process.env.REACT_APP_BASE_URL}/surveys`;

export const getSurveys = async () => {
  const result = await http.get<Survey[]>(url);
  if (result) return result.map((item) => new Survey(item));
  return [];
}

export default {
  getSurveys,
};
