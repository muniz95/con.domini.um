import { action, observable } from "mobx";
import { createContext } from "react";
import User from "../../models/User";

class NeighborsStore {
  @observable public neighbors: User[] = [];

  @action public fetchItems(): void {
    this.neighbors = [
      new User({
        id: 1,
        name: "Teste 1",
        email: "teste@teste.com",
        login: "teste",
        unit: "5-100",
      }),
      new User({
        id: 2,
        name: "Teste 2",
        email: "teste@teste.com",
        login: "teste",
        unit: "5-100",
      }),
      new User({
        id: 3,
        name: "Teste 3",
        email: "teste@teste.com",
        login: "teste",
        unit: "5-100",
      }),
    ];
  }
}

export default createContext(new NeighborsStore());
