type Gender = 'male' | 'female' | 'other';
type MartialStatus =
  | 'single'
  | 'married'
  | 'divorced'
  | 'widow'
  | 'stable-union';

interface User {
  id?: number;
  name?: string;
  unit?: string;
  email?: string;
  login?: string;
  photo?: string;
  bio?: string;
  rg?: string;
  role: string;
  mobilityRestriction: boolean;
  birthdate: Date;
  gender: Gender;
  martialStatus: MartialStatus;
  visibility: boolean;
}

export default User;
