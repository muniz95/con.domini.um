import { action, observable } from "mobx";
import { createContext } from "react";
import RideRecord from "../../models/RideRecord";
import service from '../../services/ride.service';

class RideStore {
  @observable public records: RideRecord[] = [];

  @action public async fetchItems(): Promise<void> {
    this.records = await service.getRides();
  }
}

export default createContext(new RideStore());
