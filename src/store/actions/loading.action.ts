import { TS } from '../../libs/TranslationHelper';
import { IDispatchLoadingShow, LoadingActionTypes } from '../types/loading.types';

export const toggleLoading = (
  isActive: boolean,
  message: string | null = null
): IDispatchLoadingShow => {
  if (!message) {
    message = TS.translate("global", "waitMessage");
  }

  return {
    type: LoadingActionTypes.showLoading,
    payload: {
      isActive,
      message,
    },
  };
};
