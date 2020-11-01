import { TextHelper } from '@little-sentinel/shared';
import { Dispatch } from 'react';

import { APIHelper } from '../../libs/APIHelper';
import { AlertActionTypes, IAlert, IDispatchAlertShow } from '../types/alert.types';
import { IAPIError } from '../types/api.types';
import { IDispatchUserLogin, IUserAccessToken, IUserCredentials } from '../types/user.types';

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin | IDispatchAlertShow>
) => {
  try {
    const response = await APIHelper.apiRequest<IUserAccessToken | IAPIError>(
      "POST",
      "/auth/signin",
      credentials
    );

    const successPayload = response.data as IUserAccessToken;
    console.log(successPayload);
  } catch (error) {
    const errorPayload = error.response.data as IAPIError;

    const alert: IAlert = {
      isOpen: true,
      title: "Oops!",
      message: errorPayload.message
        .map((m) => `- ${TextHelper.capitalizeFirstLetter(m)}`)
        .join("\n"),
    };

    dispatch({
      type: AlertActionTypes.showAlert,
      payload: alert,
    });

    console.log(errorPayload);
  }
};
