import { describe, it, expect } from 'vitest';
import {
  RideRecord,
  RideRecordDTO,
} from '@/modules/ride/domain/entities/ride-record';

describe('RideRecord Entity', () => {
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

  describe('create', () => {
    it('should create a RideRecord instance from DTO', () => {
      const record = RideRecord.create(validDTO);

      expect(record).toBeInstanceOf(RideRecord);
      expect(record.id).toBe(1);
      expect(record.destiny).toBe('Curitiba');
      expect(record.category).toBe('offer');
    });

    it('should parse date string to Date object', () => {
      const record = RideRecord.create(validDTO);

      expect(record.date).toBeInstanceOf(Date);
      expect(record.date?.getFullYear()).toBe(2026);
    });

    it('should handle undefined date', () => {
      const dtoWithoutDate: RideRecordDTO = {
        ...validDTO,
        date: undefined,
      };

      const record = RideRecord.create(dtoWithoutDate);

      expect(record.date).toBeUndefined();
    });

    it('should preserve all properties', () => {
      const record = RideRecord.create(validDTO);

      expect(record.phone).toBe('11999999999');
      expect(record.town).toBe('Centro');
      expect(record.departure).toBe('08:00');
      expect(record.place).toBe('Estação Central');
      expect(record.route).toBe('Avenida Paraná');
      expect(record.days).toEqual(['Monday', 'Wednesday']);
    });
  });

  describe('constructor', () => {
    it('should create instance with all required properties', () => {
      const date = new Date('2026-02-26T08:00:00Z');
      const record = new RideRecord(
        1,
        'Curitiba',
        'offer',
        '11999999999',
        'Centro',
        '08:00',
        'Estação Central',
        'Avenida Paraná',
        ['Monday', 'Wednesday'],
        date
      );

      expect(record.id).toBe(1);
      expect(record.destiny).toBe('Curitiba');
      expect(record.date).toBe(date);
    });

    it('should allow optional date property', () => {
      const record = new RideRecord(
        1,
        'Curitiba',
        'offer',
        '11999999999',
        'Centro',
        '08:00',
        'Estação Central',
        'Avenida Paraná',
        ['Monday', 'Wednesday']
      );

      expect(record.date).toBeUndefined();
    });
  });
});
