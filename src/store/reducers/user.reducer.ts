import { UserTypes } from '@little-sentinel/shared/dist';
import { Reducer } from 'redux';

import { IUser, UserAction, UserActionTypes } from '../types/user.types';

export interface IUserReducer {
  user: IUser;
}

const initialState: IUserReducer = {
  user: {
    id: 0,
    type: UserTypes.Regular,
    unsubscribed: false,
    email: "",
    name: null,
    isLoggedIn: false,
    token: null,
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
