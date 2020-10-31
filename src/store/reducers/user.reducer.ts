import { Reducer } from 'redux';

import { IUser, UserAction, UserActionTypes } from '../types/user.types';

export interface IUserReducer {
  user: IUser;
}

const initialState: IUserReducer = {
  user: {
    name: null,
    isLoggedIn: false,
  },
};

export const userReducer: Reducer<IUserReducer, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.fetch:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
