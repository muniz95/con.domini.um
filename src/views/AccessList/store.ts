import { action, observable } from "mobx";
import { createContext } from "react";
import AccessRecord from "../../models/AccessRecord";

class AccessListStore {
  @observable public records: AccessRecord[] = [];

  @action public fetchItems(): void {
    this.records = [
      {
        id: 1,
        name: "Teste 1",
        unit: "5-0102",
        rg: "00.000.000-0",
        direct: false,
        permanent: false,
      },
      {
        id: 2,
        name: "Teste 2",
        unit: "5-0102",
        rg: "00.000.000-0",
        direct: false,
        permanent: false,
      },
      {
        id: 3,
        name: "Teste 3",
        unit: "5-0102",
        rg: "00.000.000-0",
        direct: false,
        permanent: true,
      },
    ];
  }
}

export default createContext(new AccessListStore());
