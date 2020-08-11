import { action, observable } from "mobx";
import { createContext } from "react";
import User from "./models/User";

class Store {
  @observable public user: User = new User();
  @observable public authenticated: boolean = false;

  @action authenticate(email: string, password: string): void {
    if (password) {
      this.user = {
        id: 1,
        name: "Admin",
        email,
        unit: "5-102",
      };
      this.authenticated = true;
    }
  }
}

export default createContext(new Store());
