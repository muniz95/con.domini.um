import { action, observable } from 'mobx';
import { createContext } from 'react';
import BrigadeMember from '../../models/BrigadeMember';
import service from '../../services/firefighter.service';
import { instance } from '../../store';

class FirefighterBrigadeStore {
  @observable public items: BrigadeMember[] = [];
  private _store = instance;

  @action public async fetchItems() {
    this.items = await service.getFirefighters(this._store.jwt);
  }

  @action public async saveItem(item: BrigadeMember) {
    item.id
      ? await service.putFirefighter(item, this._store.jwt)
      : await service.postFirefighter(item, this._store.jwt);
  }

  @action public async removeItem(id: number) {
    await service.removeFirefighter(id, this._store.jwt);
  }
}

export default createContext(new FirefighterBrigadeStore());
