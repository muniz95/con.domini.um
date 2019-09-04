import { action, observable } from "mobx";
import { createContext } from "react";
import RideRecord from "../../models/RideRecord";

class RideStore {
  @observable public records: RideRecord[] = [];

  @action public fetchItems(): void {
    this.records = [
      {
        days: "seg, ter, qua, qui, sex",
        destiny: "Trabalho",
        id: 1,
        type: "need",
      },
      {
        days: "seg, ter, qua, qui, sex",
        destiny: "Eletrofrio/CIC/Pinheirinho",
        id: 2,
        type: "need",
      },
      {
        days: "seg, ter, qua, qui, sex",
        destiny: "PUC",
        id: 3,
        type: "need",
      },
      {
        days: "seg, ter, qua, qui, sex",
        destiny: "Alphaville Pinhais",
        id: 4,
        type: "need",
      },
      {
        days: "seg, ter, qua, qui, sex",
        destiny: "Trabalho",
        id: 5,
        type: "need",
      },
    ];
  }
}

export default createContext(new RideStore());
