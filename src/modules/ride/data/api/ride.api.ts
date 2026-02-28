import { RideRecordDTO } from '@/modules/ride/domain/entities/ride-record';
import { mockRideData } from '@/modules/ride/data/api/ride.mock';

// TODO: Replace mock data with actual API calls when backend is ready
// import { httpClient } from '@/core/api/http-client';
// import { RIDE_ENDPOINTS } from '@/modules/ride/data/api/ride.endpoints';

const rideStore: RideRecordDTO[] = [...mockRideData];
let nextId = Math.max(...mockRideData.map((r) => r.id)) + 1;

export const rideApi = {
  async getAll(): Promise<RideRecordDTO[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return [...rideStore];
  },

  async create(record: Omit<RideRecordDTO, 'id'>): Promise<RideRecordDTO> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    const newRecord: RideRecordDTO = {
      ...record,
      id: nextId++,
    } as RideRecordDTO;
    rideStore.push(newRecord);
    return newRecord;
  },

  async update(
    id: number,
    record: Partial<RideRecordDTO>
  ): Promise<RideRecordDTO> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = rideStore.findIndex((r) => r.id === id);
    if (index === -1) throw new Error(`Ride with id ${id} not found`);
    const updated = { ...rideStore[index], ...record };
    rideStore[index] = updated;
    return updated;
  },

  async delete(id: number): Promise<void> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    const index = rideStore.findIndex((r) => r.id === id);
    if (index === -1) throw new Error(`Ride with id ${id} not found`);
    rideStore.splice(index, 1);
  },
};
