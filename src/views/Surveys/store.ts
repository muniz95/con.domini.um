import { action, observable } from "mobx";
import { createContext } from "react";
import Survey from "../../models/Survey";
import service from '../../services/survey.service';

class SurveysStore {
  @observable public records: Survey[] = [];

  @action public async fetchItems(): Promise<void> {
    this.records = await service.getSurveys();
  }
}

export default createContext(new SurveysStore());
