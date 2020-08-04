import { action, observable } from "mobx";
import { createContext } from "react";
import Survey from "../../models/Survey";

class SurveysStore {
  @observable public records: Survey[] = [];

  @action public fetchItems(): void {
    this.records = [
      {
        id: 1,
        title: "Aplicação da Play Cia Securitizadora",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 2,
        title: "Enquete - Árvore de Natal",
        closingDate: new Date(),
        voted: true,
      },
      {
        id: 3,
        title: "MANUTENÇÃO DOS PISOS DOS ANDARES…",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 4,
        title: "ENQUETE - PREVISÃO ORÇAMENTARIA 2019",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 5,
        title: "ENQUETE- FECHAMENTO DE VIDROS DOS SALÕES…",
        closingDate: new Date(),
        voted: false,
      },
      {
        id: 6,
        title: "ENQUETE- SALDO DO FUNDO DE TAXA EXTRA",
        closingDate: new Date(),
        voted: true,
      },
      {
        id: 7,
        title: "PROPOSTA MRV - REFORMA PISO ENTRADA…",
        closingDate: new Date(),
        voted: false,
      },
    ];
  }
}

export default createContext(new SurveysStore());
