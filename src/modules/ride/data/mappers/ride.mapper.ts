import { RideRecord, RideRecordDTO } from '../../domain/entities/ride-record';

export const rideMapper = {
  toDomain(dto: RideRecordDTO): RideRecord {
    return RideRecord.create(dto);
  },

  toDTO(entity: RideRecord | Omit<RideRecord, 'id'>): RideRecordDTO {
    return {
      id: 'id' in entity ? entity.id : 0,
      destiny: entity.destiny,
      category: entity.category,
      phone: entity.phone,
      town: entity.town,
      departure: entity.departure,
      place: entity.place,
      route: entity.route,
      days: entity.days,
      date: entity.date?.toISOString(),
    };
  },
};
