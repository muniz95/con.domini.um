import { action, observable } from "mobx";
import { createContext } from "react";
import Message from "../../models/Message";

class MessagesStore {
  @observable public messages: Message[] = [];

  @action public fetchItems(): void {
    this.messages = [
      {
        id: 1,
        content: "Aplicação da Play Cia Securitizadora",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
      {
        id: 2,
        content: "Enquete - Árvore de Natal",
        from: "Morador",
        to: "Admin",
        deliveredAt: new Date(),
      },
      {
        id: 3,
        content: "MANUTENÇÃO DOS PISOS DOS ANDARES…",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
      {
        id: 4,
        content: "ENQUETE - PREVISÃO ORÇAMENTARIA 2019",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
      {
        id: 5,
        content: "ENQUETE- FECHAMENTO DE VIDROS DOS SALÕES…",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
      {
        id: 6,
        content: "ENQUETE- SALDO DO FUNDO DE TAXA EXTRA",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
      {
        id: 7,
        content: "PROPOSTA MRV - REFORMA PISO ENTRADA…",
        from: "Admin",
        to: "Morador",
        deliveredAt: new Date(),
      },
    ];
  }
}

export default createContext(new MessagesStore());
