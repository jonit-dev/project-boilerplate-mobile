export interface ILoading {
  isActive: boolean;
  message: string | null;
}

export enum LoadingActionTypes {
  showLoading = "showLoading",
  clearLoading = "clearLoading",
}

export interface IDispatchLoadingShow {
  type: LoadingActionTypes.showLoading;
  payload: {
    isActive: boolean;
    message: string | null;
  };
}

export type LoadingAction = IDispatchLoadingShow;
