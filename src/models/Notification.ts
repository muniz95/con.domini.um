class Notification {
  public id?: number;
  public details?: string;
  public category: string;
  public date?: Date;

  constructor(params: any) {
    this.id = params.id;
    this.details = params.details;
    this.category = params.category;
    this.date = new Date(params.created_at);
  }
}

export default Notification;
