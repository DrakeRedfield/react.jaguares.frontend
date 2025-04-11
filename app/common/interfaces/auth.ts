import type { IBaseResponse } from "./graphql";

interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface IAuthUser {
  loginUserAdmin: {
    user: IUser;
    expireIn: number;
    token: string;
  }
}