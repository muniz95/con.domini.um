class Notification {
  public id?: number;
  public details?: string;
  public type: string;
  public date?: Date;

  constructor() {
    this.id = 0;
    this.details = "";
    this.type = "Outros";
    this.date = new Date();
  }
}

export default Notification;
