import { action, observable } from "mobx";
import { createContext } from "react";
import SmallAd from "../../models/SmallAd";
import service from '../../services/smallAd.service';

class SmallAdsStore {
  @observable public items: SmallAd[] = [];

  @action public async fetchItems(): Promise<void> {
    this.items = await service.getSmallAds();
  }
}

export default createContext(new SmallAdsStore());
