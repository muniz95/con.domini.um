import { action, observable } from "mobx";
import { createContext } from "react";
import AccessRecord from "../../models/AccessRecord";
import service from '../../services/accessList.service';

class AccessListStore {
  @observable public records: AccessRecord[] = [];

  @action public async fetchItems(): Promise<void> {
    this.records = await service.getAccessRecords();
  }
}

export default createContext(new AccessListStore());
