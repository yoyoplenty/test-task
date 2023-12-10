export interface IUser {
  _id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface IUserSector {
  _id: string;
  name: string;
  user?: string;
  sector: string;
  agreedTerms: string;
  createdAt?: string;
  updatedAt?: string;
}
