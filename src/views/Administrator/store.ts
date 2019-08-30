import { observable } from "mobx";
import { createContext } from "react";
import Administrator from "../../models/Administrator";

class AdministratorStore {
  @observable public administrators: Administrator[] = [
    { id: 1, name: "CM Premium - acesso aos balancetes", phone: "41 3023-9033" },
    { id: 2, name: "Garantidora BV - segunda via de boleto", phone: "41 3232 4242" },
  ];
}

export default createContext(new AdministratorStore());
