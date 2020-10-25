import { TranslationHelper } from '../../libs/TranslationHelper';
import { Entities, GlobalTranslationKeys } from '../../types/translation.types';
import { IActionLoadingShow, LoadingActionTypes } from '../types/loading.types';

export const toggleLoading = (
  isActive: boolean,
  message: string | null = null
): IActionLoadingShow => {
  if (!message) {
    message = TranslationHelper.get(
      Entities.Global,
      GlobalTranslationKeys.WAIT_MESSAGE
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
