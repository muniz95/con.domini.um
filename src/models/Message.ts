class Message {
  public id?: number;
  public from?: string;
  public to?: string;
  public content?: string;
  public deliveredAt?: Date;
  
  constructor(params: any) {
    this.id = params.id;
    this.from = params.from;
    this.to = params.to;
    this.content = params.content;
    this.deliveredAt = new Date(params.delivered_at);
  }
}

export default Message;
