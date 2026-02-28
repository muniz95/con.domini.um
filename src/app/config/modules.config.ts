import { rideModule } from '@/modules/ride/ride.module';

export interface ModuleDefinition {
  name: string;
  enabled: boolean;
  routes: any[];
  dependencies?: string[];
}

export const ALL_MODULES: ModuleDefinition[] = [rideModule];

export const ENABLED_MODULES: ModuleDefinition[] = ALL_MODULES.filter(
  (m) => m.enabled
);

// Environment-based configuration
export const getEnabledModules = (): ModuleDefinition[] => {
  const modules = [...ALL_MODULES];

  return modules.filter((m) => m.enabled);
};

// Validate module dependencies
export const validateModuleDependencies = (
  modules: ModuleDefinition[]
): boolean => {
  const enabledModuleNames = modules
    .filter((m) => m.enabled)
    .map((m) => m.name);

  return modules.every((module) => {
    if (!module.enabled) return true;

    return (
      module.dependencies?.every((dep) => enabledModuleNames.includes(dep)) ??
      true
    );
  });
};
