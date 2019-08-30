import { action, observable } from "mobx";
import { createContext } from "react";
import LostFoundItem from "../../models/LostFoundItem";

class LostFoundStore {
  @observable public items: LostFoundItem[] = [];

  @action public fetchItems(): void {
    this.items = [
      {
        id: 1,
        name: " Lenço feminino",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 2,
        name: " Capacete Rosa",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 3,
        name: " blusa da Nike",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 4,
        name: " Cachorrinho de pelúcia",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 5,
        name: " Chuteira infantil -",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 6,
        name: " Cobertor infantil",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 7,
        name: " Pulseira Infantil",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 8,
        name: " Descanso de Pescoço",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 9,
        name: " Pelúcia Tubarão",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 10,
        name: " Notebook",
        foundBy: "Guilherme - 3-0503",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 11,
        name: " fone de ouvido",
        foundBy: "PAULA - 4-0905",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 12,
        name: " Casaco infantil de uniforme escolar",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 13,
        name: " Iphone",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 14,
        name: " Casaco masculino",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 15,
        name: " chave interna de quarto",
        foundBy: "ROBERSON - 6-0303",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 16,
        name: " Documento Carro Nissan Versa",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 17,
        name: " Cartão de Banco - Santander",
        foundBy: "Ariane Elisa - 3-0608",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 18,
        name: " Anel Infantil",
        foundBy: "Eliane - 3-0204",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 19,
        name: " Anel Infantil",
        foundBy: "Eliane - 3-0204",
        creationDate: new Date(),
        status: "",
      },
      {
        id: 20,
        name: " Blusa de lã infantil masculina",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
      {
        id: 21,
        name: " Boneca de pano",
        foundBy: "Administração - gestor - gestão",
        creationDate: new Date(),
        status: "resolvido",
      },
    ];
  }
}

export default createContext(new LostFoundStore());
