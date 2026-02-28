export class RideRecord {
  constructor(
    readonly id: number,
    readonly destiny: string,
    readonly category: 'offer' | 'need',
    readonly phone: string,
    readonly town: string,
    readonly departure: string,
    readonly place: string,
    readonly route: string,
    readonly days: string[],
    readonly date?: Date
  ) {}

  static create(data: RideRecordDTO): RideRecord {
    return new RideRecord(
      data.id,
      data.destiny,
      data.category,
      data.phone,
      data.town,
      data.departure,
      data.place,
      data.route,
      data.days,
      data.date ? new Date(data.date) : undefined
    );
  }
}

export type RideRecordDTO = {
  id: number;
  destiny: string;
  category: 'offer' | 'need';
  phone: string;
  town: string;
  departure: string;
  place: string;
  route: string;
  days: string[];
  date?: string | Date;
};
