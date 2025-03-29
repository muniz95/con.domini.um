import { action, observable } from 'mobx';
import { createContext } from 'react';
import RideRecord from '../../models/RideRecord';
import { instance } from '../../store';
import service from '../../services/ride.service';

class RideStore {
  @observable public records: RideRecord[] = [];
  private _store = instance;

  @action public async fetchItems(): Promise<void> {
    this.records = await service.getRides(this._store.jwt);
  }

  @action public async saveItem(item: RideRecord) {
    await service.post(item, this._store.jwt);
  }
}

export default createContext(new RideStore());
