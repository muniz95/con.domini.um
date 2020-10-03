import { action, observable } from "mobx";
import { createContext } from "react";
import Providence from "../../models/Providence";
import service from '../../services/providence.service';

class NotificationsStore {
  @observable public providences: Providence[] = [];

  @action public async fetchItems(): Promise<void> {
    this.providences = await service.getProvidences();
  }
}

export default createContext(new NotificationsStore());
