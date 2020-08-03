import { observable } from "mobx";
import { createContext } from "react";
import Mail from "../../models/Mail";

class MailStore {
  @observable public mailList: Mail[] = [
    { id: 1, unit: "5-0102", description: "Prezado condômino Bom dia, Informamos que há encomenda/carta disponível", receivedAt: new Date(), deliveredAt: undefined },
    { id: 2, unit: "5-0102", description: "Prezado condômino Bom dia, Informamos que há encomenda/carta disponível", receivedAt: new Date(), deliveredAt: undefined },
    { id: 3, unit: "5-0102", description: "Prezado condômino Bom dia, Informamos que há encomenda/carta disponível", receivedAt: new Date(), deliveredAt: undefined },
    { id: 4, unit: "5-0102", description: "Prezado condômino Bom dia, Informamos que há encomenda/carta disponível", receivedAt: new Date(), deliveredAt: undefined },
    { id: 5, unit: "5-0102", description: "Prezado condômino Bom dia, Informamos que há encomenda/carta disponível", receivedAt: new Date(), deliveredAt: undefined },
  ];
}

export default createContext(new MailStore());
