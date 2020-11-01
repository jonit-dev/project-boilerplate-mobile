import { HttpStatus } from '@little-sentinel/shared/dist';
import axios from 'axios';

import { showAlert } from '../store/actions/alert.action';
import { userClear } from '../store/actions/user.action';
import { store } from '../store/persist.store';
import { IAPIError } from '../store/types/api.types';
import { appEnv } from './env';

const apiAxios = axios.create({
  baseURL: appEnv.apiUrl,
});

apiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorResponse: IAPIError = error.response.data;

    switch (errorResponse.statusCode) {
      case HttpStatus.Unauthorized:
        if (!errorResponse.message.includes("Invalid credentials")) {
          store.dispatch(
            showAlert(
              "Please login",
              "We couldn't authenticate your user. Please login again."
            )
          );
        }

        break;
    }

    if (!error.response) {
      store.dispatch(
        showAlert(
          "Oops!",
          "Couldn't connect to the server. Please, check your internet connection!"
        )
      );

      //Clear user info and force a logout by redirecting him to auth
      store.dispatch(userClear());

      if (!window.location.href.includes("auth")) {
        window.location.href = `${appEnv.appUrl!}/auth`;
      }
    }

    return Promise.reject(error);
  }
);

export { apiAxios };
