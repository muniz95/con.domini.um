import { action, observable } from "mobx";
import { createContext } from "react";
import LostFoundItem from "../../models/LostFoundItem";
import service from '../../services/lostFound.service';

class LostFoundStore {
  @observable public items: LostFoundItem[] = [];

  @action public async fetchItems(token: string): Promise<void> {
    this.items = await service.getLostFoundItems(token);
  }
}

export default createContext(new LostFoundStore());
