import { IUserEntity } from '@little-sentinel/shared';

export interface IUser extends IUserEntity {
  name: string | null;
  isLoggedIn: boolean;
  token: string | null;
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

// this is used inside our reducer
export type UserAction =
  | IDispatchUserFetch
  | IDispatchUserLogin
  | IDispatchUserInfo
  | IDispatchUserClear;
