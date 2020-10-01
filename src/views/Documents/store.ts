import { observable, action } from "mobx";
import { createContext } from "react";
import Document from "../../models/Document";
import service from '../../services/document.service';

class DocumentsStore {
  @observable public documents: Document[] = [];

  @action public async fetchItems(): Promise<void> {
    this.documents = await service.getDocuments();
  }
}

export default createContext(new DocumentsStore());
