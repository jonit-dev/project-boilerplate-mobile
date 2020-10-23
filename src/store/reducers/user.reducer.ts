import { ActionUser, IUser, UserActionTypes } from '../types/user.types';

interface IState {
  user: IUser;
}

const initialState = {
  user: {
    name: null,
  },
};

export const userReducer = (
  state: IState = initialState,
  action: ActionUser
) => {
  switch (action.type) {
    case UserActionTypes.fetch:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
