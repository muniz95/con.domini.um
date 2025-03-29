import { action, observable } from 'mobx';
import { createContext } from 'react';
import Pet from '../../models/Pet';
import service from '../../services/pet.service';

class PetsStore {
  @observable public pets: Pet[] = [];

  @action public async fetchItems(): Promise<void> {
    this.pets = await service.getPets();
  }
}

export default createContext(new PetsStore());
