import { action, observable } from "mobx";
import { createContext } from "react";
import Event from "../../models/Event";

class EventsStore {
  @observable public events: Event[] = [];

  @action public fetchItems(): void {
    this.events = [
      {
        id: 1,
        title: "Aplicação da Play Cia Securitizadora",
        local: "Apartamentos",
        date: new Date(),
        attending: false,
      },
      {
        id: 2,
        title: "Enquete - Árvore de Natal",
        local: "Apartamentos",
        date: new Date(),
        attending: true,
      },
      {
        id: 3,
        title: "MANUTENÇÃO DOS PISOS DOS ANDARES…",
        local: "Apartamentos",
        date: new Date(),
        attending: false,
      },
      {
        id: 4,
        title: "ENQUETE - PREVISÃO ORÇAMENTARIA 2019",
        local: "Apartamentos",
        date: new Date(),
        attending: false,
      },
      {
        id: 5,
        title: "ENQUETE- FECHAMENTO DE VIDROS DOS SALÕES…",
        local: "Apartamentos",
        date: new Date(),
        attending: false,
      },
      {
        id: 6,
        title: "ENQUETE- SALDO DO FUNDO DE TAXA EXTRA",
        local: "Apartamentos",
        date: new Date(),
        attending: true,
      },
      {
        id: 7,
        title: "PROPOSTA MRV - REFORMA PISO ENTRADA…",
        local: "Apartamentos",
        date: new Date(),
        attending: false,
      },
    ];
  }
}

export default createContext(new EventsStore());
