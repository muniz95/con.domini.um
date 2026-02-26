import { httpClient } from '@/core/api/http-client';
import { RideRecordDTO } from '../../domain/entities/ride-record';
import { RIDE_ENDPOINTS } from './ride.endpoints';

export const rideApi = {
  async getAll(): Promise<RideRecordDTO[]> {
    return httpClient.get<RideRecordDTO[]>(RIDE_ENDPOINTS.LIST);
  },

  async create(record: Omit<RideRecordDTO, 'id'>): Promise<RideRecordDTO> {
    return httpClient.post<RideRecordDTO>(RIDE_ENDPOINTS.CREATE, record);
  },

  async update(
    id: number,
    record: Partial<RideRecordDTO>
  ): Promise<RideRecordDTO> {
    return httpClient.put<RideRecordDTO>(RIDE_ENDPOINTS.UPDATE(id), record);
  },

  async delete(id: number): Promise<void> {
    return httpClient.delete(RIDE_ENDPOINTS.DELETE(id));
  },
};
