import {AxiosError, AxiosResponse} from 'axios';
export type ApiResponse<T = object> = AxiosResponse<T>;
export type ApiError<T = {message?: string}> = Error | AxiosError<T>;
export interface Response<T = object> {
  data?: T;
  status?: number;
  message?: string;
}
