import { action, observable } from "mobx";
import { createContext } from "react";
import User from "./models/User";
import service from './services/login.service';

class Store {
  @observable public user: User = new User({});
  @observable public authenticated: boolean = false;
  @observable public jwt: string = '';

  @action checkLoggedUser() {
    if (localStorage.getItem("jwt") && localStorage.getItem("user")) {
      this.jwt = localStorage.getItem("jwt")!;
      this.user = JSON.parse(localStorage.getItem("user")!);
      this.authenticated = true;
    }
  }

  @action isAdmin() {
    return this.user.role.toLocaleLowerCase() === 'admin';
  }

  @action async authenticate(email: string, password: string): Promise<void> {
    const result = await service.authenticate(email, password);

    if (result) {
      this.user = await result.json();
      this.jwt = result.headers.get('Authorization') || '';
      this.authenticated = true;

      localStorage.setItem("jwt", this.jwt);
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  }
}

export type RootState = typeof Store;

export const instance = new Store()

export default createContext(instance);
