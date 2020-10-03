class Notice {
  public id?: number;
  public title: string;
  public date?: Date;

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.date = new Date(params.created_at);
  }
}

export default Notice;
