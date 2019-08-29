import { createContext } from "react";
import { observable } from "mobx";

class AdministratorStore {
  @observable administrators = [];
}

export default createContext(new AdministratorStore());
