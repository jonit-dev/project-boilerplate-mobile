import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiAxios } from '../constants/axios';

export class APIHelper {
  public static async request<T>(
    instance: AxiosInstance = apiAxios,
    method: AxiosRequestConfig["method"],
    url: string,
    data?: object
  ): Promise<AxiosResponse<T>> {
    return instance.request<T>({ method, url, data });
  }
}
