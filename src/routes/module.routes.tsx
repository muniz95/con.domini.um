import { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import {
  getEnabledModules,
  validateModuleDependencies,
} from '@/app/config/modules.config';

// Validate dependencies on app start
const enabledModules = getEnabledModules();
if (!validateModuleDependencies(enabledModules)) {
  console.error('Module dependency validation failed');
}

const LoadingFallback = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <p>Carregando módulo...</p>
  </div>
);

const wrapWithSuspense = (element: JSX.Element | undefined) => {
  if (!element) return undefined;
  return <Suspense fallback={<LoadingFallback />}>{element}</Suspense>;
};

export const generateModuleRoutes = (): RouteObject[] => {
  return enabledModules.flatMap((module) => {
    if (!module.enabled) return [];

    return module.routes.map((route) => ({
      ...route,
      element: wrapWithSuspense(route.element),
      children: route.children?.map((child) => ({
        ...child,
        element: wrapWithSuspense(child.element),
      })),
    }));
  });
};
