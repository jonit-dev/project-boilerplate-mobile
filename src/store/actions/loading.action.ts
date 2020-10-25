import { IActionLoadingShow, LoadingActionTypes } from '../types/loading.types';

export const toggleLoading = (
  isActive: boolean,
  message: string | null
): IActionLoadingShow => {
  return {
    type: LoadingActionTypes.showLoading,
    payload: {
      isActive,
      message,
    },
  };
};
