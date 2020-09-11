import { action, observable } from "mobx";
import { createContext } from "react";
import User from "../../models/User";

class ProfileStore {
  @observable public user: User = new User();

  @action public fetchItem(): void {
    this.user = {
      id: 1,
      name: "Admin",
      email: "admin@admin.com",
      unit: "5-102",
    };
  }
}

export default createContext(new ProfileStore());
