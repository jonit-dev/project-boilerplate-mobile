import { HttpStatus } from "@little-sentinel/shared/dist";
import axios from "axios";

import { RoutingHelper } from "../libs/RoutingHelper";
import { TS } from "../libs/TranslationHelper";
import { showAlert } from "../store/actions/alert.action";
import { userClear } from "../store/actions/user.action";
import { store } from "../store/persist.store";
import { IAPIError } from "../store/types/api.types";
import { IUser } from "../store/types/user.types";
import { appEnv } from "./env";

const apiAxios = axios.create({
  baseURL: appEnv.apiUrl,
});

apiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // First check should be if the server is actually online

    if (!error.response) {
      store.dispatch(
        showAlert(
          TS.translate("global", "oops"),
          "Couldn't connect to the server. Please, check your internet connection!"
        )
      );

      //Clear user info and force a logout by redirecting him to auth
      store.dispatch(userClear());

      if (!window.location.href.includes("auth")) {
        RoutingHelper.redirect("/auth");
      }
    }

    // Then we start checking the message payload...

    const errorResponse: IAPIError = error.response.data;

    const user: IUser = store.getState().userReducer.user;

    if (user.token) {
      switch (errorResponse.statusCode) {
        case HttpStatus.Unauthorized:
        case HttpStatus.Forbidden:
          if (!errorResponse.message.includes("Invalid credentials")) {
            store.dispatch(
              showAlert(
                TS.translate("auth", "pleaseLogin"),
                TS.translate("auth", "couldntAuthenticate")
              )
            );
            store.dispatch(userClear());
            if (!window.location.href.includes("auth")) {
              RoutingHelper.redirect("/auth");
            }
          }

          break;
      }
    }

    return Promise.reject(error);
  }
);

export { apiAxios };
