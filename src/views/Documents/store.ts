import { observable, action } from "mobx";
import { createContext } from "react";
import Document from "../../models/Document";

class DocumentsStore {
  @observable public documents: Document[] = [];

  @action public fetchItems(): void {
    this.documents = [
      {
        id: 1,
        title: "Teste 1",
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Teste 2",
        createdAt: new Date(),
      },
      {
        id: 3,
        title: "Teste 3",
        createdAt: new Date(),
      },
      {
        id: 4,
        title: "Teste 4",
        createdAt: new Date(),
      },
      {
        id: 5,
        title: "Teste 5",
        createdAt: new Date(),
      },
      {
        id: 6,
        title: "Teste 6",
        createdAt: new Date(),
      },
      {
        id: 7,
        title: "Teste 7",
        createdAt: new Date(),
      },
      {
        id: 8,
        title: "Teste 8",
        createdAt: new Date(),
      },
      {
        id: 9,
        title: "Teste 9",
        createdAt: new Date(),
      },
      {
        id: 10,
        title: "Teste 10",
        createdAt: new Date(),
      },
      {
        id: 11,
        title: "Teste 11",
        createdAt: new Date(),
      },
      {
        id: 12,
        title: "Teste 12",
        createdAt: new Date(),
      },
      {
        id: 13,
        title: "Teste 13",
        createdAt: new Date(),
      },
      {
        id: 14,
        title: "Teste 14",
        createdAt: new Date(),
      },
      {
        id: 15,
        title: "Teste 15",
        createdAt: new Date(),
      },
      {
        id: 16,
        title: "Teste 16",
        createdAt: new Date(),
      },
      {
        id: 17,
        title: "Teste 17",
        createdAt: new Date(),
      },
      {
        id: 18,
        title: "Teste 18",
        createdAt: new Date(),
      },
      {
        id: 19,
        title: "Teste 19",
        createdAt: new Date(),
      },
      {
        id: 20,
        title: "Teste 20",
        createdAt: new Date(),
      },
      {
        id: 21,
        title: "Teste 21",
        createdAt: new Date(),
      },
    ];
  }
}

export default createContext(new DocumentsStore());
