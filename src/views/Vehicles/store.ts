import { action, observable } from "mobx";
import { createContext } from "react";
import Vehicle from "../../models/Vehicle";
import service from '../../services/vehicle.service';

class VehiclesStore {
  @observable public vehicles: Vehicle[] = [];

  @action public async fetchItems(): Promise<void> {
    this.vehicles = await service.getVehicles();
  }
}

export default createContext(new VehiclesStore());
