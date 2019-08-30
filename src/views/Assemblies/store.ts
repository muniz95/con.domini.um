import { observable } from "mobx";
import { createContext } from "react";
import Assembly from "../../models/Assembly";

class AssembliesStore {
  @observable public records: Assembly[] = [
    { id: 1, title: "CM Premium - acesso aos balancetes", date: new Date(), confirmed: true },
    { id: 2, title: "Garantidora BV - segunda via de boleto", date: new Date(), confirmed: false },
  ];
}

export default createContext(new AssembliesStore());
