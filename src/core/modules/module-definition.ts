import type { RouteObject } from 'react-router-dom';

export interface ModuleDefinition {
  name: string;
  enabled: boolean;
  routes: RouteObject[];
  dependencies?: string[];
}
