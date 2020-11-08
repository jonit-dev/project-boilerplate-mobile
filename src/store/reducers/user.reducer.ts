import { Reducer } from 'redux';

import { IUser, UserAction, UserActionTypes } from '../types/user.types';

export interface IUserReducer {
  user: IUser;
}

const initialState: IUserReducer = {
  user: {
    id: null,
    token: null,
    name: null,
    address: null,
    phone: null,
    type: null,
    unsubscribed: null,
    email: null,
    isLoggedIn: false,
    created: null,
    updated: null,
  },
};

export const userReducer: Reducer<IUserReducer, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.fetch:
      return { ...state, user: action.payload };

    case UserActionTypes.login:
      const { accessToken } = action.payload;

      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          token: accessToken,
        },
      };
    case UserActionTypes.refreshInfo:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case UserActionTypes.clear:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
