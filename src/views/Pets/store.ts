import { action, observable } from "mobx";
import { createContext } from "react";
import Pet from "../../models/Pet";

class PetsStore {
  @observable public pets: Pet[] = [];

  @action public fetchItems(): void {
    this.pets = [
      {
        id: 1,
        name: "Teste 1",
        petType: "Cachorro",
        race: "Vira lata",
      },
      {
        id: 2,
        name: "Teste 2",
        petType: "Cachorro",
        race: "Vira lata",
      },
      {
        id: 3,
        name: "Teste 3",
        petType: "Cachorro",
        race: "Vira lata",
      },
    ];
  }
}

export default createContext(new PetsStore());
