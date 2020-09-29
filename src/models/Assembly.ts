class Assembly {
  public id: number;
  public title: string;
  public date: Date;
  public confirmed: boolean;

  constructor(params: any) {
    this.confirmed = params.confirmed;
    this.date = new Date(params.date);
    this.id = params.id;
    this.title = params.title;
  }

  get dateToString() {
    return this.date.toLocaleDateString("pt-br");
  }

  get isConfirmed() {
    return this.confirmed ? "Sim" : "Não";
  }
}

export default Assembly;
