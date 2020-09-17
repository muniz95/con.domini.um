import { action, observable } from "mobx";
import { createContext } from "react";
import User from "./models/User";
import service from './services/login.service';

class Store {
  @observable public user: User = new User({});
  @observable public authenticated: boolean = false;
  @observable public jwt: string = '';

  @action async authenticate(email: string, password: string): Promise<void> {
    const result = await service.authenticate(email, password);

    if (result) {
      this.user = result;
      this.jwt = result.email;
    }
  }
}

export default createContext(new Store());
