interface ProviderRecord {
  id: number;
  name: string;
  unit: string;
  date: Date;
  ownerAtHome: boolean;
  rg: string;
  reason?: string;
  observation?: string;
}

export default ProviderRecord;
