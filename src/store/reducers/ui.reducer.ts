import { Reducer } from 'redux';

import { AlertAction, AlertActionTypes, IAlert } from '../types/alert.types';
import { ILoading, LoadingAction, LoadingActionTypes } from '../types/loading.types';

export interface IUIReducer {
  loading: ILoading;
  alert: IAlert;
}

const initialState: IUIReducer = {
  loading: {
    isActive: false,
    message: null,
  },
  alert: {
    isOpen: false,
    title: "Alert",
    message: "This is an alert",
  },
};

export const uiReducer: Reducer<IUIReducer, AlertAction | LoadingAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LoadingActionTypes.showLoading:
      return { ...state, loading: action.payload };

    case AlertActionTypes.showAlert:
      return { ...state, alert: action.payload };

    case AlertActionTypes.clearAlert:
      return { ...state, alert: initialState.alert };

    default:
      return state;
  }
};
