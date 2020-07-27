class SmallAd {

  public static create(id: number, name: string, foundBy: string, creationDate: Date, createdBy: string, status: string): SmallAd {
    const item = new SmallAd();
    item.id = id;
    item.name = name;
    item.foundBy = foundBy;
    item.creationDate = creationDate;
    item.createdBy = createdBy;
    item.status = status;
    return item;
  }
  public id: number;
  public name: string;
  public foundBy: string;
  public createdBy: string;
  public creationDate: Date;
  public status: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.foundBy = "";
    this.createdBy = "";
    this.creationDate = new Date();
    this.status = "";
  }
}

export default SmallAd;
