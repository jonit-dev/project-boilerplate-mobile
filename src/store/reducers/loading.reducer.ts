import { ActionLoading, ILoadingData, LoadingActionTypes } from '../types/loading.types';

const INITIAL_STATE: ILoadingData = {
  isActive: false,
  message: null,
};

export const loadingReducer = (
  state = INITIAL_STATE,
  action: ActionLoading
) => {
  switch (action.type) {
    case LoadingActionTypes.showLoading:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
