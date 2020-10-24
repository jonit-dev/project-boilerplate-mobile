export interface IUser {
  name: string | null;
  isLoggedIn: boolean;
}

export enum UserActionTypes {
  fetch,
}

// Dispatch actions
export interface ActionUserFetch {
  type: UserActionTypes.fetch;
  payload: IUser;
}

// this is used inside our reducer
export type ActionUser = ActionUserFetch;
