import { action, observable } from "mobx";
import { createContext } from "react";
import Notice from "../../models/Notice";
import service from '../../services/notice.service';

class BoardStore {
  @observable public items: Notice[] = [];

  @action public async fetchItems(): Promise<void> {
    this.items = await service.getNotices();
  }
}

export default createContext(new BoardStore());
