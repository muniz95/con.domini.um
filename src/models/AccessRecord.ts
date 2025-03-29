export interface AccessRecord {
  id: number;
  name: string;
  unit: string;
  rg: string;
  kinship?: string;
  direct: boolean;
  permanent: boolean;
  observation?: string;
}
