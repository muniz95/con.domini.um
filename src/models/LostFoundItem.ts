class LostFoundItem {

  public static create(id: number, name: string, foundBy: string, creationDate: Date, status: string): LostFoundItem {
    const item = new LostFoundItem();
    item.id = id;
    item.name = name;
    item.foundBy = foundBy;
    item.creationDate = creationDate;
    item.status = status;
    return item;
  }
  public id: number;
  public name: string;
  public foundBy: string;
  public creationDate: Date;
  public status: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.foundBy = "";
    this.creationDate = new Date();
    this.status = "";
  }
}

export default LostFoundItem;
