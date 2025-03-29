class LostFoundItem {
  public id: number;
  public name: string;
  public foundBy: string;
  public description: string;
  public image?: string;
  public creationDate: Date;
  public status: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.foundBy = params.foundBy;
    this.description = params.description;
    this.image = params.image;
    this.creationDate = new Date(params.created_at);
    this.status = params.status;
  }

  get createdAt() {
    return this.creationDate.toLocaleDateString('pt-BR');
  }
}

export default LostFoundItem;
