import { action, observable } from "mobx";
import { createContext } from "react";
import Employee from "../../models/Employee";
import service from '../../services/employee.service';

class EmployeesStore {
  @observable public employees: Employee[] = [];

  @action public async fetchItems(): Promise<void> {
    this.employees = await service.getEmployees();
  }
}

export default createContext(new EmployeesStore());
