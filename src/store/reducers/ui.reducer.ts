import { Reducer } from 'redux';

import { ILoading, LoadingAction, LoadingActionTypes } from '../types/loading.types';

export interface IUIReducer {
  loading: ILoading;
}

const initialState: IUIReducer = {
  loading: {
    isActive: false,
    message: null,
  },
};

export const uiReducer: Reducer<IUIReducer, LoadingAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LoadingActionTypes.showLoading:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
