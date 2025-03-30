import { action, observable } from 'mobx';
import { createContext } from 'react';
import Notice from '../../models/Notice';

class BoardStore {
  @observable public noticeList: Notice[] = [];

  @action public fetchItems(): void {
    this.noticeList = [
      {
        id: 1,
        title: 'INFORMATIVO: Cuidados na Quadra',
        date: new Date(),
      },
      {
        id: 2,
        title: 'Informativo - PARADA NO ABASTECIMENTO DA SANEPAR ÀS 16:05',
        date: new Date(),
      },
      {
        id: 3,
        title: 'CIRCULAR 48 - FALTA DE ÁGUA - SANEPAR 07_08_2020',
        date: new Date(),
      },
      {
        id: 4,
        title: 'INFORMATIVO: REGRAS DE UTILIZAÇÃO DAS QUADRAS',
        date: new Date(),
      },
      {
        id: 5,
        title: 'INFORMATIVO - REGRAS DE UTILIZAÇÃO DA ACADEMIA',
        date: new Date(),
      },
      {
        id: 6,
        title: 'INFORMATIVO: Manutenção da academia',
        date: new Date(),
      },
      {
        id: 7,
        title: 'CIRCULAR 48 - FALTA DE ÁGUA - SANEPAR 07_08_2020',
        date: new Date(),
      },
      {
        id: 8,
        title: 'INFORMATIVO: Manutenção da esteira da academia',
        date: new Date(),
      },
      {
        id: 9,
        title: 'ASSUNTO: Manutenção dos carrinhos de compra',
        date: new Date(),
      },
      {
        id: 10,
        title: 'CIRCULAR 47 - HOJE FALTA DE ÁGUA - SANEPAR 02_08_2020 DOMINGO',
        date: new Date(),
      },
    ];
  }
}

export default createContext(new BoardStore());
