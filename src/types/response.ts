import { IUser } from "./user";

type LoginData = {
  accessToken: string;
  user: IUser;
};

export interface GenericResponse {
  statusCode: number;
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
