import { action, observable } from 'mobx';
import { createContext } from 'react';
import ProviderRecord from '../../models/ProviderRecord';
import service from '../../services/provider.service';

class ProviderListStore {
  @observable public records: ProviderRecord[] = [];

  @action public async fetchItems(): Promise<void> {
    this.records = await service.getProviders();
  }
}

export default createContext(new ProviderListStore());
