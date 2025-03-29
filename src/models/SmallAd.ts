class SmallAd {
  public static create(
    id: number,
    name: string,
    foundBy: string,
    creationDate: Date,
    createdBy: string,
    status: string
  ): SmallAd {
    const item = new SmallAd({
      id,
      name,
      foundBy,
      creationDate,
      createdBy,
      status,
    });
    return item;
  }
  public id: number;
  public name: string;
  public foundBy: string;
  public createdBy: string;
  public creationDate: Date;
  public status: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.foundBy = params.foundBy;
    this.createdBy = params.createdBy;
    this.creationDate = new Date(params.created_at);
    this.status = params.status;
  }
}

export default SmallAd;
