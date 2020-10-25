import { combineReducers } from 'redux';

import { loadingReducer } from './loading.reducer';
import { userReducer } from './user.reducer';

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export const rootReducer = combineReducers({
  userReducer: userReducer,
  loadingReducer: loadingReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
