import { action, observable } from "mobx";
import { createContext } from "react";
import User from "../../models/User";

class NeighborsStore {
  @observable public neighbors: User[] = [];

  @action public fetchItems(): void {
    this.neighbors = [
      {
        id: 1,
        name: "Teste 1",
      },
      {
        id: 2,
        name: "Teste 2",
      },
      {
        id: 3,
        name: "Teste 3",
      },
    ];
  }
}

export default createContext(new NeighborsStore());
