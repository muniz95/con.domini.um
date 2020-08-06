import { action, observable } from "mobx";
import { createContext } from "react";
import Album from "../../models/Album";

class GalleryStore {
  @observable public albums: Album[] = [];

  @action public fetchItems(): void {
    this.albums = [
      {
        id: 1,
        title: "Aplicação da Play Cia Securitizadora",
        date: new Date(),
        cover: "image-1",
      },
      {
        id: 2,
        title: "Enquete - Árvore de Natal",
        date: new Date(),
        cover: "image-2",
      },
      {
        id: 3,
        title: "MANUTENÇÃO DOS PISOS DOS ANDARES…",
        date: new Date(),
        cover: "image-3",
      },
      {
        id: 4,
        title: "ENQUETE - PREVISÃO ORÇAMENTARIA 2019",
        date: new Date(),
        cover: "image-4",
      },
      {
        id: 5,
        title: "ENQUETE- FECHAMENTO DE VIDROS DOS SALÕES…",
        date: new Date(),
        cover: "image-5",
      },
    ];
  }
}

export default createContext(new GalleryStore());
