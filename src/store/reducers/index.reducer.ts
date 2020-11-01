import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { uiReducer } from './ui.reducer';
import { userReducer } from './user.reducer';

export interface IAction<T, P> {
  type: T;
  payload: P;
}

const rootReducerPersistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

export const rootReducer = persistReducer(
  rootReducerPersistConfig,
  combineReducers({
    userReducer: userReducer,
    uiReducer: uiReducer,
  })
);

export type StoreState = ReturnType<typeof rootReducer>;
