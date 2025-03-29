type Categories = 'need' | 'offer';

class RideRecord {
  public id: number;
  public destiny: string;
  public place: string;
  public days?: string[];
  public date?: Date;
  public departure: string;
  public phone?: string;
  public route: string;
  public category: Categories;

  constructor(params: any) {
    this.id = params.id;
    this.destiny = params.destiny;
    this.place = params.place;
    this.days = params.days;
    this.date = new Date(params.date);
    this.departure = params.departure;
    this.phone = params.phone;
    this.route = params.route;
    this.category = params.category;
  }

  get dayOrFrequency() {
    return this.date === null
      ? this.days!.join(', ')
      : this.date!.toLocaleDateString('pt-br');
  }
}

export default RideRecord;
