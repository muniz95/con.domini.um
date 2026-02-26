import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useRideRecords } from '@/features/ride/presentation/hooks/use-ride-records';
import { useCreateRideRecord } from '@/features/ride/presentation/hooks/use-create-ride-record';
import { queryClient } from '@/lib/react-query';
import { RideRecord } from '@/features/ride/domain/entities/ride-record';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(QueryClientProvider, { client: queryClient }, children);

describe('useCreateRideRecord', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  it('should create a ride record', async () => {
    const { result } = renderHook(() => useCreateRideRecord(), { wrapper });

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

    await act(async () => {
      result.current.mutate(newRecord);
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it('should invalidate ride records query on success', async () => {
    const { result: queryResult } = renderHook(() => useRideRecords(), {
      wrapper,
    });
    const { result: mutationResult } = renderHook(() => useCreateRideRecord(), {
      wrapper,
    });

    await waitFor(() => {
      expect(queryResult.current.data).toBeDefined();
    });

    const newRecord = new RideRecord(
      0,
      'Brasília',
      'offer',
      '61987654321',
      'Plano Piloto',
      '06:00',
      'Rodoviária',
      'BR-040',
      ['Wednesday']
    );

    await act(async () => {
      mutationResult.current.mutate(newRecord);
    });

    await waitFor(() => {
      expect(mutationResult.current.isSuccess).toBe(true);
    });
  });

  it('should return data on successful creation', async () => {
    const { result } = renderHook(() => useCreateRideRecord(), { wrapper });

    const newRecord = new RideRecord(
      0,
      'Curitiba',
      'need',
      '41987654321',
      'Centro',
      '10:00',
      'Terminal',
      'BR-116',
      ['Thursday']
    );

    await act(async () => {
      result.current.mutate(newRecord);
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toBeDefined();
    });
  });
});
