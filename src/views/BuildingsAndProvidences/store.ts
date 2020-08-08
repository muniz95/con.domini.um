import { action, observable } from "mobx";
import { createContext } from "react";
import Providence from "../../models/Providence";

class NotificationsStore {
  @observable public providences: Providence[] = [];

  @action public fetchItems(): void {
    this.providences = [
      {
        id: 1,
        details: "Aplicação da Play Cia Securitizadora",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 2,
        details: "Enquete - Árvore de Natal",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 3,
        details: "MANUTENÇÃO DOS PISOS DOS ANDARES…",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 4,
        details: "ENQUETE - PREVISÃO ORÇAMENTARIA 2019",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 5,
        details: "ENQUETE- FECHAMENTO DE VIDROS DOS SALÕES…",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 6,
        details: "ENQUETE- SALDO DO FUNDO DE TAXA EXTRA",
        type: "Outros",
        date: new Date(),
      },
      {
        id: 7,
        details: "PROPOSTA MRV - REFORMA PISO ENTRADA…",
        type: "Outros",
        date: new Date(),
      },
    ];
  }
}

export default createContext(new NotificationsStore());
