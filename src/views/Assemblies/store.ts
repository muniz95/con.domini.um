import { action, observable } from "mobx";
import { createContext } from "react";
import Assembly from "../../models/Assembly";
import service from '../../services/assembly.service';

class AssembliesStore {
  @observable public items: Assembly[] = [];

  @action public async fetchItems() {
    this.items = await service.getAssemblies();
  }
}

export default createContext(new AssembliesStore());
