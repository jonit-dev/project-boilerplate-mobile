export interface IUser {
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
}

// Dispatch actions
export interface IDispatchUserFetch {
  type: UserActionTypes.fetch;
  payload: IUser;
}

export interface IDispatchUserLogin {
  type: UserActionTypes.login;
  payload: IUserAccessToken;
}

// this is used inside our reducer
export type UserAction = IDispatchUserFetch | IDispatchUserLogin;
