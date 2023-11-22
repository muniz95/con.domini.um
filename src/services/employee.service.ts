import http from '../utils/http';
import Employee from '../models/Employee';

const url = `${process.env.REACT_APP_BASE_URL}/employees`;

export const getEmployees = async () => {
  const result = await http.get<Employee[]>(url);
  if (result) return result.map((item) => new Employee(item));
  return [];
}

export default {
  getEmployees,
};
