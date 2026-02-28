import { describe, it, expect } from 'vitest';
import { rideApi } from '@/modules/ride/data/api/ride.api';

describe('RideApi', () => {
  describe('getAll', () => {
    it('should fetch all rides', async () => {
      const rides = await rideApi.getAll();

      expect(Array.isArray(rides)).toBe(true);
      expect(rides.length).toBeGreaterThan(0);
      expect(rides[0]).toHaveProperty('id');
      expect(rides[0]).toHaveProperty('destiny');
    });

    it('should return rides with correct structure', async () => {
      const rides = await rideApi.getAll();

      rides.forEach((ride) => {
        expect(ride).toHaveProperty('id');
        expect(ride).toHaveProperty('destiny');
        expect(ride).toHaveProperty('category');
        expect(ride).toHaveProperty('phone');
        expect(ride).toHaveProperty('town');
        expect(ride).toHaveProperty('departure');
        expect(ride).toHaveProperty('place');
        expect(ride).toHaveProperty('route');
        expect(ride).toHaveProperty('days');
      });
    });
  });

  describe('create', () => {
    it('should create a new ride', async () => {
      const newRide = await rideApi.create({
        destiny: 'Rio de Janeiro',
        category: 'need',
        phone: '21988888888',
        town: 'Zona Sul',
        departure: '09:00',
        place: 'Metrô',
        route: 'Via Dutra',
        days: ['Tuesday', 'Thursday'],
      });

      expect(newRide).toHaveProperty('id');
      expect(newRide.destiny).toBe('Rio de Janeiro');
      expect(newRide.category).toBe('need');
    });

    it('should return created ride with id', async () => {
      const newRide = await rideApi.create({
        destiny: 'Belo Horizonte',
        category: 'offer',
        phone: '31987654321',
        town: 'Savassi',
        departure: '07:00',
        place: 'Shopping',
        route: 'BR-381',
        days: ['Monday', 'Friday'],
      });

      expect(typeof newRide.id).toBe('number');
      expect(newRide.id).toBeGreaterThan(0);
    });
  });

  describe('update', () => {
    it('should update an existing ride', async () => {
      const updated = await rideApi.update(1, {
        destiny: 'Updated Destination',
      });

      expect(updated.id).toBe(1);
      expect(updated.destiny).toBe('Updated Destination');
    });

    it('should preserve other properties when updating', async () => {
      const updated = await rideApi.update(1, {
        destiny: 'New Destiny',
      });

      expect(updated).toHaveProperty('id');
      expect(updated).toHaveProperty('destiny');
      expect(updated.destiny).toBe('New Destiny');
    });
  });

  describe('delete', () => {
    it('should delete a ride', async () => {
      await expect(rideApi.delete(1)).resolves.not.toThrow();
    });
  });
});
