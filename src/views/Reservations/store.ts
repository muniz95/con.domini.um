import { action, observable } from "mobx";
import { createContext } from "react";
import ProviderRecord from "../../models/ProviderRecord";

class ProviderListStore {
  @observable public records: ProviderRecord[] = [];

  @action public fetchItems(): void {
    this.records = [
      {
        id: 1,
        name: "Teste 1",
        unit: "5-0102",
        rg: "00.000.000-0",
        date: new Date(),
        ownerAtHome: false,
      },
      {
        id: 2,
        name: "Teste 2",
        unit: "5-0102",
        rg: "00.000.000-0",
        date: new Date(),
        ownerAtHome: false,
      },
      {
        id: 3,
        name: "Teste 3",
        unit: "5-0102",
        rg: "00.000.000-0",
        date: new Date(),
        ownerAtHome: true,
      },
    ];
  }
}

export default createContext(new ProviderListStore());
