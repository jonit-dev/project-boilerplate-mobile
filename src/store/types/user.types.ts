export interface IUser {
  name: string | null;
  isLoggedIn: boolean;
}

export enum UserActionTypes {
  fetch = "fetch",
}

// Dispatch actions
export interface IDispatchUserFetch {
  type: UserActionTypes.fetch;
  payload: IUser;
}

// this is used inside our reducer
export type UserAction = IDispatchUserFetch;
