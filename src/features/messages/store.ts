import { action, observable } from 'mobx';
import { createContext } from 'react';
import Message from '../../models/Message';
import service from '../../services/message.service';

class MessagesStore {
  @observable public messages: Message[] = [];

  @action public async fetchItems(): Promise<void> {
    this.messages = await service.getMessages();
  }
}

export default createContext(new MessagesStore());
