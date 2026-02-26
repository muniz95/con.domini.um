import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  RideService,
  IRideRepository,
} from '@/features/ride/domain/services/ride.service';
import { RideRecord } from '@/features/ride/domain/entities/ride-record';

describe('RideService', () => {
  let rideService: RideService;
  let mockRepository: vi.Mocked<IRideRepository>;

  const mockRideRecord = new RideRecord(
    1,
    'Curitiba',
    'offer',
    '11999999999',
    'Centro',
    '08:00',
    'Estação Central',
    'Avenida Paraná',
    ['Monday', 'Wednesday'],
    new Date('2026-02-26T08:00:00Z')
  );

  beforeEach(() => {
    mockRepository = {
      getAll: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    };

    rideService = new RideService(mockRepository);
  });

  describe('getRideRecords', () => {
    it('should return array of ride records from repository', async () => {
      mockRepository.getAll.mockResolvedValueOnce([mockRideRecord]);

      const records = await rideService.getRideRecords();

      expect(records).toHaveLength(1);
      expect(records[0]).toEqual(mockRideRecord);
    });

    it('should call repository.getAll', async () => {
      mockRepository.getAll.mockResolvedValueOnce([]);

      await rideService.getRideRecords();

      expect(mockRepository.getAll).toHaveBeenCalled();
    });

    it('should throw error if repository fails', async () => {
      mockRepository.getAll.mockRejectedValueOnce(new Error('API Error'));

      await expect(rideService.getRideRecords()).rejects.toThrow('API Error');
    });
  });

  describe('createRideRecord', () => {
    it('should create a new ride record', async () => {
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

      mockRepository.create.mockResolvedValueOnce(
        new RideRecord(
          2,
          'Rio de Janeiro',
          'need',
          '21988888888',
          'Zona Sul',
          '09:00',
          'Metrô',
          'Via Dutra',
          ['Tuesday']
        )
      );

      const result = await rideService.createRideRecord(newRecord);

      expect(result.id).toBe(2);
      expect(result.destiny).toBe('Rio de Janeiro');
    });

    it('should call repository.create with correct data', async () => {
      const newRecord = new RideRecord(
        0,
        'Belo Horizonte',
        'offer',
        '31987654321',
        'Savassi',
        '07:00',
        'Shopping',
        'BR-381',
        ['Monday', 'Friday']
      );

      mockRepository.create.mockResolvedValueOnce(
        new RideRecord(
          3,
          'Belo Horizonte',
          'offer',
          '31987654321',
          'Savassi',
          '07:00',
          'Shopping',
          'BR-381',
          ['Monday', 'Friday']
        )
      );

      await rideService.createRideRecord(newRecord);

      expect(mockRepository.create).toHaveBeenCalledWith(newRecord);
    });
  });

  describe('updateRideRecord', () => {
    it('should update an existing ride record', async () => {
      const updatedRecord = new RideRecord(
        1,
        'Updated Destiny',
        'offer',
        '11999999999',
        'Centro',
        '08:00',
        'Estação Central',
        'Avenida Paraná',
        ['Monday', 'Wednesday']
      );

      mockRepository.update.mockResolvedValueOnce(updatedRecord);

      const result = await rideService.updateRideRecord(1, {
        destiny: 'Updated Destiny',
      });

      expect(result.destiny).toBe('Updated Destiny');
    });

    it('should call repository.update with id and data', async () => {
      mockRepository.update.mockResolvedValueOnce(mockRideRecord);

      await rideService.updateRideRecord(1, { destiny: 'Updated' });

      expect(mockRepository.update).toHaveBeenCalledWith(
        1,
        expect.objectContaining({ destiny: 'Updated' })
      );
    });
  });

  describe('deleteRideRecord', () => {
    it('should delete a ride record', async () => {
      mockRepository.delete.mockResolvedValueOnce(undefined);

      await expect(rideService.deleteRideRecord(1)).resolves.not.toThrow();
    });

    it('should call repository.delete with id', async () => {
      mockRepository.delete.mockResolvedValueOnce(undefined);

      await rideService.deleteRideRecord(1);

      expect(mockRepository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw error if repository fails', async () => {
      mockRepository.delete.mockRejectedValueOnce(new Error('Delete failed'));

      await expect(rideService.deleteRideRecord(1)).rejects.toThrow(
        'Delete failed'
      );
    });
  });
});
