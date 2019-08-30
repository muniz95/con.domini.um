import { observable } from "mobx";
import { createContext } from "react";

class AdministratorStore {
  @observable public administrators = [];
}

export default createContext(new AdministratorStore());
