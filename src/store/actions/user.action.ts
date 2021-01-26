import { HttpStatus, IUserEntity } from "@project-boilerplate/shared";
import { Dispatch } from "react";

import { appEnv } from "../../constants/env";
import { APIHelper } from "../../libs/APIHelper";
import { RoutingHelper } from "../../libs/RoutingHelper";
import { TS } from "../../libs/TranslationHelper";
import { AlertActionTypes, IAlert, IDispatchAlertShow } from "../types/alert.types";
import { IAPIError } from "../types/api.types";
import {
  IChangePasswords,
  IDispatchUserClear,
  IDispatchUserInfo,
  IDispatchUserLogin,
  INewUser,
  IUserAccessToken,
  IUserCredentials,
  UserActionTypes,
} from "../types/user.types";
import { clearAlert, showAlert } from "./alert.action";

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

export const userForgotPassword = (email: string) => async (
  dispatch: Dispatch<IDispatchAlertShow>
) => {
  try {
    const response = await APIHelper.apiRequest(
      "POST",
      "/users/forgot-password",
      { email }
    );

    if (response.status === HttpStatus.OK) {
      console.log("Password recovery run successfully");

      dispatch(
        showAlert(
          TS.translate("global", "success"),
          TS.translate("auth", "passwordRecoverySuccess")
        )
      );
    }
  } catch (error) {
    console.error(error);

    const errorPayload = error.response.data as IAPIError;

    const errorMessage = APIHelper.handleErrorMessage(errorPayload.message);

    dispatch(showAlert(TS.translate("global", "oops"), errorMessage));
  }
};

export const userRegister = (newUserPayload: INewUser) => async (
  dispatch: Dispatch<IDispatchAlertShow | ReturnType<typeof userLogin>>
) => {
  try {
    const response = await APIHelper.apiRequest(
      "POST",
      "/auth/signup",
      newUserPayload,
      false
    );

    if (response.status === HttpStatus.Created) {
      console.log("account created, redirect user to login");

      dispatch(
        showAlert(
          TS.translate("email", "welcome"),
          TS.translate("email", "accountCreatedSuccessfully")
        )
      );

      const { email, password } = newUserPayload;

      const credentials: IUserCredentials = {
        email,
        password,
      };

      dispatch(userLogin(credentials));
    }
  } catch (error) {
    const errorPayload = error.response.data as IAPIError;

    const errorMessage = APIHelper.handleErrorMessage(errorPayload.message);

    dispatch(showAlert(TS.translate("global", "oops"), errorMessage));
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
      "/auth/login",
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
          TS.translate("global", "oops"),
          TS.translate("global", "connectionError")
        )
      );
    }

    const errorPayload = error.response.data as IAPIError;

    const errorMessage = APIHelper.handleErrorMessage(errorPayload.message);

    const alert: IAlert = {
      isOpen: true,
      title: TS.translate("global", "oops"),
      message: errorMessage,
    };

    dispatch({
      type: AlertActionTypes.showAlert,
      payload: alert,
    });

    console.log(errorPayload);
  }
};

export const userChangePassword = (changePassword: IChangePasswords) => async (
  dispatch: Dispatch<
    | IDispatchUserLogin
    | ReturnType<typeof showAlert>
    | ReturnType<typeof userClear>
    | ReturnType<typeof clearAlert>
  >
) => {
  try {
    const response = await APIHelper.apiRequest(
      "POST",
      "/auth/change-password",
      changePassword
    );

    if (response.status === HttpStatus.OK) {
      console.log("Password changed successfully!");
      dispatch(
        showAlert(
          TS.translate("global", "success"),
          TS.translate("email", "passwordChangeSuccess")
        )
      );

      dispatch(userClear());
      RoutingHelper.redirect("/auth");
    } else {
      dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("auth", "changePasswordGenericError", {
            adminEmail: appEnv.adminEmail,
          })
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
};
