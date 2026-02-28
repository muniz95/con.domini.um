import { describe, it, expect } from 'vitest';
import {
  RideRecord,
  RideRecordDTO,
} from '@/modules/ride/domain/entities/ride-record';
import { rideMapper } from '@/modules/ride/data/mappers/ride.mapper';

describe('RideMapper', () => {
  const validDTO: RideRecordDTO = {
    id: 1,
    destiny: 'Curitiba',
    category: 'offer',
    phone: '11999999999',
    town: 'Centro',
    departure: '08:00',
    place: 'Estação Central',
    route: 'Avenida Paraná',
    days: ['Monday', 'Wednesday'],
    date: '2026-02-26T08:00:00Z',
  };

  describe('toDomain', () => {
    it('should convert DTO to RideRecord entity', () => {
      const record = rideMapper.toDomain(validDTO);

      expect(record).toBeInstanceOf(RideRecord);
      expect(record.id).toBe(1);
      expect(record.destiny).toBe('Curitiba');
    });

    it('should convert date string to Date object', () => {
      const record = rideMapper.toDomain(validDTO);

      expect(record.date).toBeInstanceOf(Date);
    });

    it('should handle DTO without date', () => {
      const dtoWithoutDate: RideRecordDTO = {
        ...validDTO,
        date: undefined,
      };

      const record = rideMapper.toDomain(dtoWithoutDate);

      expect(record.date).toBeUndefined();
    });
  });

  describe('toDTO', () => {
    it('should convert RideRecord entity to DTO', () => {
      const record = RideRecord.create(validDTO);
      const dto = rideMapper.toDTO(record);

      expect(dto.id).toBe(1);
      expect(dto.destiny).toBe('Curitiba');
      expect(dto.category).toBe('offer');
    });

    it('should convert date to ISO string', () => {
      const record = RideRecord.create(validDTO);
      const dto = rideMapper.toDTO(record);

      expect(typeof dto.date).toBe('string');
      expect(dto.date).toContain('2026-02-26');
    });

    it('should convert partial RideRecord without id', () => {
      const record = new RideRecord(
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

      const dto = rideMapper.toDTO(record);

      expect(dto.id).toBe(0);
      expect(dto.destiny).toBe('Rio de Janeiro');
    });
  });
});
