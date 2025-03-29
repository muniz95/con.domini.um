import { action, observable } from 'mobx';
import { createContext } from 'react';
import Mail from '../../models/Mail';
import service from '../../services/mail.service';

class MailStore {
  @observable public items: Mail[] = [];

  @action public async fetchItems() {
    this.items = await service.getMails();
  }
}

export default createContext(new MailStore());
