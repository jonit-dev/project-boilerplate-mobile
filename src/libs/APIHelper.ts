import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiAxios } from '../constants/axios';

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
    data?: object
  ): Promise<AxiosResponse<T>> {
    return apiAxios.request<T>({ method, url, data });
  }
}
