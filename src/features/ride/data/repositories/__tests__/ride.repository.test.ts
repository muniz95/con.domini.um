import { describe, it, expect, vi } from 'vitest';
import { RideRepository } from '@/features/ride/data/repositories/ride.repository';
import { RideRecord } from '@/features/ride/domain/entities/ride-record';
import { rideApi } from '@/features/ride/data/api/ride.api';

vi.mock('@/features/ride/data/api/ride.api');

describe('RideRepository', () => {
  let repository: RideRepository;
  const mockRideApi = vi.mocked(rideApi);

  const mockRideDTO = {
    id: 1,
    destiny: 'Curitiba',
    category: 'offer' as const,
    phone: '11999999999',
    town: 'Centro',
    departure: '08:00',
    place: 'Estação Central',
    route: 'Avenida Paraná',
    days: ['Monday', 'Wednesday'],
    date: '2026-02-26T08:00:00Z',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    repository = new RideRepository();
  });

  describe('getAll', () => {
    it('should return array of RideRecord entities', async () => {
      mockRideApi.getAll.mockResolvedValueOnce([mockRideDTO]);

      const records = await repository.getAll();

      expect(Array.isArray(records)).toBe(true);
      expect(records[0]).toBeInstanceOf(RideRecord);
      expect(records[0].destiny).toBe('Curitiba');
    });

    it('should call rideApi.getAll', async () => {
      mockRideApi.getAll.mockResolvedValueOnce([]);

      await repository.getAll();

      expect(mockRideApi.getAll).toHaveBeenCalled();
    });

    it('should map DTOs to domain entities', async () => {
      const mockDtos = [mockRideDTO, { ...mockRideDTO, id: 2 }];
      mockRideApi.getAll.mockResolvedValueOnce(mockDtos);

      const records = await repository.getAll();

      expect(records).toHaveLength(2);
      expect(records[0].id).toBe(1);
      expect(records[1].id).toBe(2);
    });
  });

  describe('create', () => {
    it('should create a new ride record', async () => {
      mockRideApi.create.mockResolvedValueOnce(mockRideDTO);

      const newRecord = new RideRecord(
        0,
        'Rio de Janeiro',
        'need',
        '21988888888',
        'Zona Sul',
        '09:00',
        'Metrô',
        'Via Dutra',
        ['Tuesday']
      );

      const result = await repository.create(newRecord);

      expect(result).toBeInstanceOf(RideRecord);
      expect(result.id).toBe(1);
    });

    it('should call rideApi.create with mapped data (without id)', async () => {
      mockRideApi.create.mockResolvedValueOnce(mockRideDTO);

      const newRecord = new RideRecord(
        0,
        'Rio de Janeiro',
        'need',
        '21988888888',
        'Zona Sul',
        '09:00',
        'Metrô',
        'Via Dutra',
        ['Tuesday']
      );

      await repository.create(newRecord);

      expect(mockRideApi.create).toHaveBeenCalledWith(
        expect.objectContaining({
          destiny: 'Rio de Janeiro',
          category: 'need',
          phone: '21988888888',
          town: 'Zona Sul',
          departure: '09:00',
          place: 'Metrô',
          route: 'Via Dutra',
          days: ['Tuesday'],
        })
      );

      expect(mockRideApi.create).toHaveBeenCalledWith(
        expect.not.objectContaining({ id: expect.any(Number) })
      );
    });

    it('should throw error if create fails', async () => {
      mockRideApi.create.mockRejectedValueOnce(new Error('Create failed'));

      const newRecord = new RideRecord(
        0,
        'Rio',
        'need',
        '21988888888',
        'Centro',
        '09:00',
        'Metrô',
        'BR',
        ['Tuesday']
      );

      await expect(repository.create(newRecord)).rejects.toThrow(
        'Create failed'
      );
    });
  });

  describe('update', () => {
    it('should update a ride record', async () => {
      const updatedDTO = { ...mockRideDTO, destiny: 'Updated' };
      mockRideApi.update.mockResolvedValueOnce(updatedDTO);

      const result = await repository.update(1, {
        destiny: 'Updated',
      } as RideRecord);

      expect(result.destiny).toBe('Updated');
    });

    it('should call rideApi.update with id and mapped data', async () => {
      mockRideApi.update.mockResolvedValueOnce(mockRideDTO);

      await repository.update(1, { destiny: 'Updated' } as RideRecord);

      expect(mockRideApi.update).toHaveBeenCalledWith(
        1,
        expect.objectContaining({
          destiny: 'Updated',
        })
      );
    });

    it('should throw error if update fails', async () => {
      mockRideApi.update.mockRejectedValueOnce(new Error('Update failed'));

      await expect(
        repository.update(1, { destiny: 'Updated' } as RideRecord)
      ).rejects.toThrow('Update failed');
    });
  });

  describe('delete', () => {
    it('should delete a ride record', async () => {
      mockRideApi.delete.mockResolvedValueOnce(undefined);

      await expect(repository.delete(1)).resolves.not.toThrow();
    });

    it('should call rideApi.delete with id', async () => {
      mockRideApi.delete.mockResolvedValueOnce(undefined);

      await repository.delete(1);

      expect(mockRideApi.delete).toHaveBeenCalledWith(1);
    });

    it('should throw error if delete fails', async () => {
      mockRideApi.delete.mockRejectedValueOnce(new Error('Delete failed'));

      await expect(repository.delete(1)).rejects.toThrow('Delete failed');
    });
  });
});
