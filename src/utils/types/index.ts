export interface IUser {
  _id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserSector {
  name: string;
  sector: string;
  agreedTerms: string;
}
