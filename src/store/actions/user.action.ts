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
import { showAlert } from './alert.action';

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
  dispatch: Dispatch<
    IDispatchUserLogin | IDispatchAlertShow | IDispatchUserClear
  >
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
    if (!error.response) {
      //Clear user info and force a logout by redirecting him to auth
      dispatch({
        type: UserActionTypes.clear,
      });

      if (!window.location.href.includes("auth")) {
        RoutingHelper.redirect("/auth");
      }
      return dispatch(
        showAlert(
          "Oops!",
          "Couldn't connect to the server. Please, check your internet connection!"
        )
      );
    }

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