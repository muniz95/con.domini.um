type Categories = 'need' | 'offer';

interface RideRecord {
  id: number;
  destiny: string;
  place: string;
  days?: string[];
  date?: Date;
  departure: string;
  phone?: string;
  route: string;
  category: Categories;
}

export default RideRecord;
