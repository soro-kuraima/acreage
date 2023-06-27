import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosRequestTransformer,
  AxiosResponse,
  AxiosResponseTransformer,
} from 'axios';
import camelcaseKeys from 'camelcase-keys';
import toast from 'react-hot-toast';
import snakecaseKeys from 'snakecase-keys';

import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  removeAccessAndRefreshTokens,
} from 'lib/general/token';
import { ServiceStatusCodes } from 'types/common';

interface APIServiceOptions {
  withAuthToken: boolean;
  params?: AxiosRequestConfig['params'];
  timeout?: AxiosRequestConfig['timeout'];
  formData?: boolean;
}

export interface APIListingResponse<T> {
  total: number;
  page: number;
  size: number;
  items: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformBackendErrorToFrontendError = (errorResponse: any) => ({
  ...errorResponse,
  fieldErrors:
    errorResponse.detail instanceof Array
      ? errorResponse.detail
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((err: any) => err.loc.includes('body'))
          .reduce(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (acc: any, err: any) => {
              const key: string = Object.keys(
                camelcaseKeys({ [err.loc[err.loc.length - 1]]: true })
              )[0];

              return {
                ...acc,
                [key]: err,
              };
            },
            {}
          )
      : undefined,
});

export class APIService {
  /*
   *
   *  This class acts as an intermediately passage to call the API through axios.
   *  Any common logic that needs to be executed before or after an API call completes this class can be used.
   *
   */

  /*
   * The APIClient is an instance of axios which will be used to call all the API across the application.
   */
  static APIClient = axios.create({
    baseURL: import.meta.env.VITE_API_HOST_ORIGIN || '',
    transformResponse: [
      ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
      (resBody) => (resBody ? camelcaseKeys(resBody, { deep: true }) : resBody),
      (data, _, status) =>
        status === ServiceStatusCodes.HTTP_422
          ? transformBackendErrorToFrontendError(data)
          : data,
    ],
    transformRequest: [
      (reqBody) => (reqBody ? snakecaseKeys(reqBody, { deep: true }) : reqBody),
      ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
    ],
  });

  /*
   *
   * This `init` method helps the axios instance to re-fetch the access token
   * using refresh token and call the same API back again
   * with the new access token.
   * If refresh token is also expired then the API call will fail.
   *
   * This is the init method which needs to be called only once.
   *
   */
  static API_PREFIX_URL = import.meta.env.VITE_API_HOST_ORIGIN || '';
  private static requestedAccessTokenPromise: Promise<unknown> | null = null;
  private static isInitiated = false;
  static init() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAPICallFailWithExpiredToken = (error: any) => {
      if (error.response?.data?.detail !== 'Expired or Invalid token') {
        throw error;
      }
      if (error.config.url.includes('get-new-access-token')) throw error;

      if (!this.requestedAccessTokenPromise) {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw error;

        this.requestedAccessTokenPromise = APIService.APIClient.post(
          '/auth/refresh',
          {
            refreshToken,
          }
        )
          .then(({ data }) => {
            const { accessToken } = data;

            return setAccessToken(accessToken);
          })
          .catch((err) => {
            removeAccessAndRefreshTokens();
            toast.error('Session expired');
            throw err;
          })
          .finally(() => {
            this.requestedAccessTokenPromise = null;
          });
      }

      return this.requestedAccessTokenPromise.then(() =>
        APIService.APIClient({
          ...error.config,
          headers: {
            ...error.config.headers,
            Authorization: getAccessToken(),
          },
        })
      );
    };

    if (!this.isInitiated) {
      // eslint-disable-next-line no-console
      console.log('Interceptor initiated');
      this.APIClient.interceptors.response.use(
        undefined,
        onAPICallFailWithExpiredToken
      );
      //   this.APIClient.interceptors.response.use(
      //     undefined,
      //     AxiosLogger.errorLogger
      //   );
      this.isInitiated = true;
    }
  }

  /*
   *
   * All the below static methods are just being used as a proxy to axios methods.
   * Any common logic can be plugged into these methods.
   *
   */

  static async get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    options?: APIServiceOptions
  ) {
    const headers = {} as AxiosRequestHeaders;
    if (options?.withAuthToken) {
      headers.Authorization = getAccessToken() as string;
    }

    return this.APIClient.get<T, R, D>(url, {
      headers,
      params: options?.params,
      timeout: options?.timeout,
    });
  }

  static async post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    options?: APIServiceOptions
  ) {
    const headers = {} as AxiosRequestHeaders;
    if (options?.withAuthToken) {
      headers.Authorization = (await getAccessToken()) as string;
    }

    if (options?.formData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    return this.APIClient.post<T, R, D>(url, data, {
      headers,
      params: options?.params,
      ...(options?.formData ? { transformRequest: () => data } : {}),
    });
  }

  static async put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    options?: APIServiceOptions
  ) {
    const headers = {} as AxiosRequestHeaders;
    if (options?.withAuthToken) {
      headers.Authorization = (await getAccessToken()) as string;
    }
    if (options?.formData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    return this.APIClient.put<T, R, D>(url, data, {
      headers,
      params: options?.params,
      ...(options?.formData ? { transformRequest: () => data } : {}),
    });
  }

  static async patch<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    options?: APIServiceOptions
  ) {
    const headers = {} as AxiosRequestHeaders;
    if (options?.withAuthToken) {
      headers.Authorization = (await getAccessToken()) as string;
    }

    return this.APIClient.patch<T, R, D>(url, data, { headers });
  }

  static async delete<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    options?: APIServiceOptions
  ) {
    const headers = {} as AxiosRequestHeaders;
    if (options?.withAuthToken) {
      headers.Authorization = (await getAccessToken()) as string;
    }

    return this.APIClient.delete<T, R, D>(url, {
      headers,
      params: options?.params,
    });
  }
}

APIService.init();
