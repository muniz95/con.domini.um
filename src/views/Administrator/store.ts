import { action, observable } from "mobx";
import { createContext } from "react";
import Administrator from "../../models/Administrator";
import { instance } from '../../store';
import service from '../../services/administrator.service';

class AdministratorStore {
  @observable public items: Administrator[] = [];
  private _store = instance;

  @action public async fetchItems(): Promise<void> {
    this.items = await service.getAdministrators(this._store.jwt);
  }

  @action public async saveItem(item: Administrator) {
    await service.postAdministrator(item, this._store.jwt);
  }
}

export default createContext(new AdministratorStore());
