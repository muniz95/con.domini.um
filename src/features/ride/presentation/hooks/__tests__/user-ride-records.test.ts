import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useRideRecords } from '@/features/ride/presentation/hooks/use-ride-records';
import { queryClient } from '@/lib/react-query';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(QueryClientProvider, { client: queryClient }, children);

describe('useRideRecords', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  it('should fetch ride records on mount', async () => {
    const { result } = renderHook(() => useRideRecords(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toBeDefined();
  });

  it('should return array of ride records', async () => {
    const { result } = renderHook(() => useRideRecords(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(Array.isArray(result.current.data)).toBe(true);
  });

  it('should handle loading state', async () => {
    const { result } = renderHook(() => useRideRecords(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  it('should handle success state', async () => {
    const { result } = renderHook(() => useRideRecords(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
