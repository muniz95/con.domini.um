import { describe, it, expect, vi } from 'vitest';
import { RideRepository } from '@/features/ride/data/repositories/ride.repository';
import { RideRecord } from '@/features/ride/domain/entities/ride-record';
import * as rideApiModule from '@/features/ride/data/api/ride.api';

vi.mock('@/features/ride/data/api/ride.api');

describe('RideRepository', () => {
  let repository: RideRepository;

  beforeEach(() => {
    repository = new RideRepository();
  });

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

  describe('getAll', () => {
    it('should return array of RideRecord entities', async () => {
      vi.mocked(rideApiModule.rideApi.getAll).mockResolvedValueOnce([
        mockRideDTO,
      ]);

      const records = await repository.getAll();

      expect(Array.isArray(records)).toBe(true);
      expect(records[0]).toBeInstanceOf(RideRecord);
      expect(records[0].destiny).toBe('Curitiba');
    });

    it('should call rideApi.getAll', async () => {
      vi.mocked(rideApiModule.rideApi.getAll).mockResolvedValueOnce([]);

      await repository.getAll();

      expect(rideApiModule.rideApi.getAll).toHaveBeenCalled();
    });

    it('should map DTOs to domain entities', async () => {
      const mockDtos = [mockRideDTO, { ...mockRideDTO, id: 2 }];
      vi.mocked(rideApiModule.rideApi.getAll).mockResolvedValueOnce(mockDtos);

      const records = await repository.getAll();

      expect(records).toHaveLength(2);
      expect(records[0].id).toBe(1);
      expect(records[1].id).toBe(2);
    });
  });

  describe('create', () => {
    it('should create a new ride record', async () => {
      vi.mocked(rideApiModule.rideApi.create).mockResolvedValueOnce(
        mockRideDTO
      );

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

    it('should call rideApi.create with mapped data', async () => {
      vi.mocked(rideApiModule.rideApi.create).mockResolvedValueOnce(
        mockRideDTO
      );

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

      expect(rideApiModule.rideApi.create).toHaveBeenCalledWith(
        expect.objectContaining({
          destiny: 'Rio de Janeiro',
          category: 'need',
        })
      );
    });
  });

  describe('update', () => {
    it('should update a ride record', async () => {
      const updatedDTO = { ...mockRideDTO, destiny: 'Updated' };
      vi.mocked(rideApiModule.rideApi.update).mockResolvedValueOnce(updatedDTO);

      const result = await repository.update(1, {
        destiny: 'Updated',
      });

      expect(result.destiny).toBe('Updated');
    });

    it('should call rideApi.update with id and data', async () => {
      vi.mocked(rideApiModule.rideApi.update).mockResolvedValueOnce(
        mockRideDTO
      );

      await repository.update(1, { destiny: 'Updated' });

      expect(rideApiModule.rideApi.update).toHaveBeenCalledWith(
        1,
        expect.any(Object)
      );
    });
  });

  describe('delete', () => {
    it('should delete a ride record', async () => {
      vi.mocked(rideApiModule.rideApi.delete).mockResolvedValueOnce(undefined);

      await expect(repository.delete(1)).resolves.not.toThrow();
    });

    it('should call rideApi.delete with id', async () => {
      vi.mocked(rideApiModule.rideApi.delete).mockResolvedValueOnce(undefined);

      await repository.delete(1);

      expect(rideApiModule.rideApi.delete).toHaveBeenCalledWith(1);
    });
  });
});
