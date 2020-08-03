import { observable } from "mobx";
import { createContext } from "react";
import Collaborator from "../../models/Collaborator";

class CollaboratorsStore {
  @observable public collaborators: Collaborator[] = [
    { id: 1, name: "Teste 1", role: "Porteiro Noite", startWork: "19:00", endWork: "07:00" },
    { id: 2, name: "Teste 2", role: "Porteiro Noite", startWork: "19:00", endWork: "07:00" },
    { id: 3, name: "Teste 3", role: "Porteiro Noite", startWork: "19:00", endWork: "07:00" },
    { id: 4, name: "Teste 4", role: "Porteiro Noite", startWork: "19:00", endWork: "07:00" },
    { id: 5, name: "Teste 5", role: "Porteiro Noite", startWork: "19:00", endWork: "07:00" },
  ];
}

export default createContext(new CollaboratorsStore());
