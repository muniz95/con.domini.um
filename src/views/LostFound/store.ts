import { createContext } from "react";
import { observable } from "mobx";

class LostFoundStore {
  @observable items = [];
}

export default createContext(new LostFoundStore());
