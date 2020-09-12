import { action, observable } from "mobx";
import { createContext } from "react";
import Dweller from "../../models/Dweller";

class UnitStore {
  @observable public dwellers: Dweller[] = [];

  @action public fetchItems(): void {
    this.dwellers = [
      new Dweller({
        id: 1,
        name: "Teste",
        rg: "00.000.000-0",
        kinship: "Parente",
        birthdate: new Date("1991-12-06"),
        mobilityRestriction: false,
      }),
    ];
  }
}

export default createContext(new UnitStore());
