import { IUserEntity, TextHelper } from '@little-sentinel/shared';
import { Dispatch } from 'react';

import { APIHelper } from '../../libs/APIHelper';
import { RoutingHelper } from '../../libs/RoutingHelper';
import { AlertActionTypes, IAlert, IDispatchAlertShow } from '../types/alert.types';
import { IAPIError } from '../types/api.types';
import {
  IDispatchUserClear,
  IDispatchUserInfo,
  IDispatchUserLogin,
  IUserAccessToken,
  IUserCredentials,
  UserActionTypes,
} from '../types/user.types';

export const userClear = (): IDispatchUserClear => {
  return {
    type: UserActionTypes.clear,
  };
};

export const userInfoRefresh = () => async (
  dispatch: Dispatch<IDispatchUserInfo>
) => {
  try {
    const response = await APIHelper.apiRequest<IUserEntity | IAPIError>(
      "GET",
      "/users/self"
    );

    const successResponse = response.data as IUserEntity;

    console.log(successResponse);

    dispatch({
      type: UserActionTypes.refreshInfo,
      payload: successResponse,
    });
  } catch (error) {
    const errorResponse = error.response as IAPIError;

    console.log(errorResponse);
  }
};

export const userLogin = (credentials: IUserCredentials) => async (
  dispatch: Dispatch<IDispatchUserLogin | IDispatchAlertShow>
) => {
  try {
    const response = await APIHelper.apiRequest<IUserAccessToken | IAPIError>(
      "POST",
      "/auth/signin",
      credentials,
      false
    );

    const successPayload = response.data as IUserAccessToken;

    console.log("Login success!");

    await dispatch({
      type: UserActionTypes.login,
      payload: successPayload,
    });

    RoutingHelper.redirect("/main");
  } catch (error) {
    const errorPayload = error.response.data as IAPIError;

    let errorMessage;
    if (Array.isArray(errorPayload.message)) {
      errorMessage = errorPayload.message
        .map((m) => `- ${TextHelper.capitalizeFirstLetter(m)}`)
        .join("\n");
    } else {
      errorMessage = errorPayload.message;
    }

    const alert: IAlert = {
      isOpen: true,
      title: "Oops!",
      message: errorMessage,
    };

    dispatch({
      type: AlertActionTypes.showAlert,
      payload: alert,
    });

    console.log(errorPayload);
  }
};
