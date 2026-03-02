import { ModuleDefinition } from '@/core/modules/module-definition';
import { lazy } from 'react';

const RidePage = lazy(() => import('./presentation/pages/ride-page'));
const OfferRidePage = lazy(
  () => import('./presentation/pages/offer-ride-page')
);
const NeededRidePage = lazy(
  () => import('./presentation/pages/needed-ride-page')
);

export const rideModule: ModuleDefinition = {
  name: 'ride',
  enabled: true,
  dependencies: [],
  routes: [
    {
      path: 'ride',
      element: <RidePage />,
      children: [
        {
          path: 'offer',
          element: <OfferRidePage />,
        },
        {
          path: 'needed',
          element: <NeededRidePage />,
        },
      ],
    },
  ],
};

export * from './presentation/hooks';
export * from './domain/entities/ride-record';
