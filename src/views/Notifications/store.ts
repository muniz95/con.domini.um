import { action, observable } from "mobx";
import { createContext } from "react";
import Notification from "../../models/Notification";
import service from '../../services/notification.service';

class NotificationsStore {
  @observable public notifications: Notification[] = [];

  @action public async fetchItems(): Promise<void> {
    this.notifications = await service.getNotifications();
  }
}

export default createContext(new NotificationsStore());
