class Document {
  public id?: number;
  public title?: string;
  public category?: string;
  public createdAt?: Date;

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.category = params.category;
    this.createdAt = new Date(params.created_at);
  }
}

export default Document;
