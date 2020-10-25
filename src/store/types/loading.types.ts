export interface ILoadingData {
  isActive: boolean;
  message: string | null;
}

export enum LoadingActionTypes {
  showLoading,
  clearLoading,
}

export interface IActionLoadingShow {
  type: LoadingActionTypes.showLoading;
  payload: {
    isActive: boolean;
    message: string | null;
  };
}

export type ActionLoading = IActionLoadingShow;
