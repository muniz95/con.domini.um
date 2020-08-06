class Album {
  public static create(id: number, title: string, cover: string, date: Date): Album {
    const item = new Album();
    item.id = id;
    item.title = title;
    item.cover = cover;
    item.date = date;
    return item;
  }

  public id: number;
  public title: string;
  public cover: string;
  public date: Date;

  constructor() {
    this.id = 0;
    this.title = "";
    this.cover = "";
    this.date = new Date();
  }
}

export default Album;
