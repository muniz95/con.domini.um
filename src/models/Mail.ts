class Mail {
  public id?: number;
  public unit?: string;
  public description?: string;
  public receivedAt?: Date;
  public deliveredAt?: Date;

  constructor(params: any) {
    this.id = params.id;
    this.unit = params.unit;
    this.description = params.description;
    this.receivedAt = new Date(params.received_at);
    this.deliveredAt = new Date(params.delivered_at);
  }
}

export default Mail;
