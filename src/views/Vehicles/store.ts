import { action, observable } from "mobx";
import { createContext } from "react";
import Vehicle from "../../models/Vehicle";

class VehiclesStore {
  @observable public vehicles: Vehicle[] = [];

  @action public fetchItems(): void {
    this.vehicles = [
      {
        id: 1,
        brand: "Peugeot",
        color: "Gray",
        model: "206",
        plate: "AAA-0000",
        vehicleType: "carro"
      },
    ];
  }
}

export default createContext(new VehiclesStore());
