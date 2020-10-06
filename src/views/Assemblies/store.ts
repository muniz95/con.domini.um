import { action, observable } from "mobx";
import { createContext } from "react";
import Assembly from "../../models/Assembly";
import { instance } from '../../store';
import service from '../../services/assembly.service';

class AssembliesStore {
  @observable public items: Assembly[] = [];
  private _store = instance;

  @action public async fetchItems() {
    this.items = await service.getAssemblies(this._store.jwt);
  }

  @action public async saveItem(item: Assembly) {
    await service.postAssembly(item, this._store.jwt);
  }
}

export default createContext(new AssembliesStore());
