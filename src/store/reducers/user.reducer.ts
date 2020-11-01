import { Reducer } from 'redux';

import { IUser, UserAction, UserActionTypes } from '../types/user.types';

export interface IUserReducer {
  user: IUser;
}

const initialState: IUserReducer = {
  user: {
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
    default:
      return state;
  }
};
