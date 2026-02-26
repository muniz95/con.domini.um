import { RideRecord } from '../../domain/entities/ride-record';
import { IRideRepository } from '../../domain/services/ride-service';
import { rideApi } from '../api/ride.api';
import { rideMapper } from '../mappers/ride.mapper';

export class RideRepository implements IRideRepository {
  async getAll(): Promise<RideRecord[]> {
    const dtos = await rideApi.getAll();
    return dtos.map(rideMapper.toDomain);
  }

  async create(record: Omit<RideRecord, 'id'>): Promise<RideRecord> {
    const dto = await rideApi.create(rideMapper.toDTO(record));
    return rideMapper.toDomain(dto);
  }

  async update(id: number, record: Partial<RideRecord>): Promise<RideRecord> {
    const dto = await rideApi.update(
      id,
      rideMapper.toDTO(record as RideRecord)
    );
    return rideMapper.toDomain(dto);
  }

  async delete(id: number): Promise<void> {
    return rideApi.delete(id);
  }
}
