import { HttpStatus } from "@project-boilerplate/shared/dist";
import axios from "axios";

import { APIHelper } from "../libs/APIHelper";
import { RoutingHelper } from "../libs/RoutingHelper";
import { TS } from "../libs/TranslationHelper";
import { showAlert } from "../store/actions/alert.action";
import { userClear } from "../store/actions/user.action";
import { store } from "../store/persist.store";
import { IAPIError } from "../store/types/api.types";
import { appEnv } from "./env";

const apiAxios = axios.create({
  baseURL: appEnv.apiUrl,
});

apiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // First check should be if the server is actually online. If not, show error and send him to login
    if (!error.response) {
      console.log("Connection error!");
      store.dispatch(
        showAlert(
          TS.translate("global", "oops"),
          TS.translate("global", "connectionError")
        )
      );

      if (!window.location.pathname.includes("auth")) {
        RoutingHelper.redirect("/auth");
      }

      //Clear user info and force a logout by redirecting him to auth
      // store.dispatch(userLogout());

      return;
    }

    // Then we start checking the message payload...

    if (error.response) {
      const errorResponse: IAPIError = error.response.data;

      // Standard generic auth error messages

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
            RoutingHelper.redirect("/auth");
          }

          break;
        default:
          console.log(error);
          break;
      }

      // Custom error messages handling

      const errorMessage = APIHelper.handleErrorMessage(errorResponse.message);

      store.dispatch(showAlert(TS.translate("global", "oops"), errorMessage));
    }
    return Promise.reject(error);
  }
);

export { apiAxios };
