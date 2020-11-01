import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiAxios } from '../constants/axios.constants';
import { store } from '../store/persist.store';

export class APIHelper {
  public static async request<T>(
    instance: AxiosInstance,
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ): Promise<AxiosResponse<T>> {
    return instance.request<T>({ method, url, data });
  }

  public static async apiRequest<T>(
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object | null,
    authenticated: boolean = true
  ): Promise<AxiosResponse<T>> {
    const userReducer = store.getState().userReducer;

    const { token } = userReducer.user;

    if (authenticated) {
      return apiAxios.request<T>({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return apiAxios.request<T>({ method, url, data });
  }
}
