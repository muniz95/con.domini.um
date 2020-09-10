import { action, observable } from "mobx";
import { createContext } from "react";
import Employee from "../../models/Employee";

class EmployeesStore {
  @observable public employees: Employee[] = [];

  @action public fetchItems(): void {
    this.employees = [
      {
        id: 1,
        photo: "",
        name: "Teste",
        role: "Diarista",
        begin: "08:00",
        end: "12:00"
      },
    ];
  }
}

export default createContext(new EmployeesStore());
