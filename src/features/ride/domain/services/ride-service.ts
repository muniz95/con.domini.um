import { RideRecord } from '../entities/ride-record';

export interface IRideRepository {
  getAll(): Promise<RideRecord[]>;
  create(record: Omit<RideRecord, 'id'>): Promise<RideRecord>;
  update(id: number, record: Partial<RideRecord>): Promise<RideRecord>;
  delete(id: number): Promise<void>;
}

export class RideService {
  constructor(private repository: IRideRepository) {}

  async getRideRecords(): Promise<RideRecord[]> {
    return this.repository.getAll();
  }

  async createRideRecord(record: Omit<RideRecord, 'id'>): Promise<RideRecord> {
    return this.repository.create(record);
  }

  async updateRideRecord(
    id: number,
    record: Partial<RideRecord>
  ): Promise<RideRecord> {
    return this.repository.update(id, record);
  }

  async deleteRideRecord(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
