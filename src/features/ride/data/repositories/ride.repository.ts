import { RideRecord } from '../../domain/entities/ride-record';
import { IRideRepository } from '../../domain/services/ride.service';
import { rideApi } from '../api/ride.api';
import { rideMapper } from '../mappers/ride.mapper';

export class RideRepository implements IRideRepository {
  async getAll(): Promise<RideRecord[]> {
    const dtos = await rideApi.getAll();
    return dtos.map(rideMapper.toDomain);
  }

  async create(record: Omit<RideRecord, 'id'>): Promise<RideRecord> {
    const dtoToSend = rideMapper.toDTO(record);
    const { id, ...createData } = dtoToSend;

    const dto = await rideApi.create(createData);
    return rideMapper.toDomain(dto);
  }

  async update(id: number, record: Partial<RideRecord>): Promise<RideRecord> {
    const dtoToUpdate = rideMapper.toDTO(record as RideRecord);

    const dto = await rideApi.update(id, dtoToUpdate);
    return rideMapper.toDomain(dto);
  }

  async delete(id: number): Promise<void> {
    return rideApi.delete(id);
  }
}
