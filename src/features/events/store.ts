import { action, observable } from 'mobx';
import { createContext } from 'react';
import Event from '../../models/Event';
import service from '../../services/event.service';

class EventsStore {
  @observable public events: Event[] = [];

  @action public async fetchItems(): Promise<void> {
    this.events = await service.getEvents();
  }
}

export default createContext(new EventsStore());
