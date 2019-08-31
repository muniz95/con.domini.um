import { observable } from "mobx";
import { createContext } from "react";
import BrigadeMember from "../../models/BrigadeMember";

class FirefighterBrigadeStore {
  @observable public members: BrigadeMember[] = [
    { id: 1, name: "Administração - gestor - gestão", type: "Chefe" },
    { id: 2, name: "Paulo - 3-1203 - Sindico", type: "Membro" },
    { id: 3, name: "Cesar - 4-0502", type: "Membro" },
  ];
}

export default createContext(new FirefighterBrigadeStore());
