import { action, observable } from "mobx";
import { createContext } from "react";
import Collaborator from "../../models/Collaborator";
import service from '../../services/collaborator.service'

class CollaboratorsStore {
  @observable public items: Collaborator[] = [];

  @action public async fetchItems() {
    this.items = await service.getCollaborators();
  }
}

export default createContext(new CollaboratorsStore());
