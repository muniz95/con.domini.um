import { action, observable } from "mobx";
import { createContext } from "react";
import Dweller from "../../models/Dweller";
import service from '../../services/unit.service';

class UnitStore {
  @observable public dwellers: Dweller[] = [];

  @action public async fetchItems(): Promise<void> {
    this.dwellers = await service.getDwellers();
  }
}

export default createContext(new UnitStore());
