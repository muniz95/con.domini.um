import { action, observable } from "mobx";
import { createContext } from "react";
import BrigadeMember from "../../models/BrigadeMember";
import service from '../../services/firefighter.service';

class FirefighterBrigadeStore {
  @observable public items: BrigadeMember[] = [];

  @action public async fetchItems() {
    this.items = await service.getFirefighters();
  }
}

export default createContext(new FirefighterBrigadeStore());
