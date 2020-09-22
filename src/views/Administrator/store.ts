import { action, observable } from "mobx";
import { createContext } from "react";
import Administrator from "../../models/Administrator";
import service from '../../services/administrator.service';

class AdministratorStore {
  @observable public items: Administrator[] = [];

  @action public async fetchItems(): Promise<void> {
    this.items = await service.getAdministrators();
  }
}

export default createContext(new AdministratorStore());
