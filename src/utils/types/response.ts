import { IUser } from ".";

type LoginData = {
  accessToken: string;
  user: IUser;
};

export interface GenericResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface ILoginResponse {
  statusCode: number;
  message: string;
  data?: LoginData;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}

export interface Sector {
  _id: string;
  name: string;
  parentSector?: string;
  subSectors?: Sector[] | any;
  createdAt: string;
  updatedAt: string;
}
