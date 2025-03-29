import { action, observable } from 'mobx';
import { createContext } from 'react';
import Occurrence from '../../models/Occurrence';
import service from '../../services/occurrence.service';

class OccurrencesStore {
  @observable public occurrences: Occurrence[] = [];

  @action public async fetchItems(): Promise<void> {
    this.occurrences = await service.getOccurrences();
  }
}

export default createContext(new OccurrencesStore());
