import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import RidePage from '@/modules/ride/presentation/pages/ride-page';
import { queryClient } from '@/lib/react-query';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(
    QueryClientProvider,
    { client: queryClient },
    React.createElement(BrowserRouter, {}, children)
  );

describe('RidePage', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  it('should render page title', async () => {
    render(<RidePage />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText('Carona solidária')).toBeInTheDocument();
    });
  });

  it('should display loading state initially', () => {
    render(<RidePage />, { wrapper });

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('should display ride records in table', async () => {
    render(<RidePage />, { wrapper });

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1);
  });

  it('should have offer and need buttons', async () => {
    render(<RidePage />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText(/Ofereço carona/i)).toBeInTheDocument();
      expect(screen.getByText(/Preciso de carona/i)).toBeInTheDocument();
    });
  });

  it('should display ride destination in table', async () => {
    render(<RidePage />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText(/Aeroporto/)).toBeInTheDocument();
    });
  });
});
