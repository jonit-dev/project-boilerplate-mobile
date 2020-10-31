import { Entities, GlobalTranslationKeys } from '@little-sentinel/shared';

import { TranslationHelper } from '../../libs/TranslationHelper';
import { IDispatchLoadingShow, LoadingActionTypes } from '../types/loading.types';

export const toggleLoading = (
  isActive: boolean,
  message: string | null = null
): IDispatchLoadingShow => {
  if (!message) {
    message = TranslationHelper.get(
      Entities.Global,
      GlobalTranslationKeys.WaitMessage
    );
  }

  return {
    type: LoadingActionTypes.showLoading,
    payload: {
      isActive,
      message,
    },
  };
};
