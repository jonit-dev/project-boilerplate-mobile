import { IUserEntity } from "@project-boilerplate/shared";

export interface IUser extends IUserEntity {
  name: string | null;
  isLoggedIn: boolean;
  token: string | null;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserAccessToken {
  accessToken: string;
}

export enum UserActionTypes {
  fetch = "fetch",
  login = "login",
  refreshInfo = "refreshInfo",
  clear = "clear",
  register = "register",
}

// Dispatch actions
export interface IDispatchUserFetch {
  type: UserActionTypes.fetch;
  payload: IUser;
}

export interface IDispatchUserInfo {
  type: UserActionTypes.refreshInfo;
  payload: IUserEntity;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.login;
  payload: IUserAccessToken;
}

export interface IDispatchUserClear {
  type: UserActionTypes.clear;
}

export interface IDispatchUserRegister {
  type: UserActionTypes.register;
}

// this is used inside our reducer
export type UserAction =
  | IDispatchUserFetch
  | IDispatchUserLogin
  | IDispatchUserInfo
  | IDispatchUserClear;
