import http from '../utils/http';
import Employee from '../models/Employee';

const url = process.env.REACT_APP_BASE_URL;

export const getEmployees = async () => {
  return (await http.get<Employee[]>(`${url}/employees`))
    .map((item) => new Employee(item));
}

export default {
  getEmployees,
};
