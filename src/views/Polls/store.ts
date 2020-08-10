import { action, observable } from "mobx";
import { createContext } from "react";
import Poll from "../../models/Poll";

class ProviderListStore {
  @observable public polls: Poll[] = [];

  @action public fetchItems(): void {
    this.polls = [
      {
        id: 1,
        title: "Teste 1",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 2,
        title: "Teste 2",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 3,
        title: "Teste 3",
        closingDate: new Date(),
        voted: true,
      },
    ];
  }
}

export default createContext(new ProviderListStore());
