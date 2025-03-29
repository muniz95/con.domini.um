import { action, observable } from 'mobx';
import { createContext } from 'react';
import Poll from '../../models/Poll';
import service from '../../services/poll.service';

class ProviderListStore {
  @observable public polls: Poll[] = [];

  @action public async fetchItems(): Promise<void> {
    this.polls = await service.getPolls();
  }
}

export default createContext(new ProviderListStore());
