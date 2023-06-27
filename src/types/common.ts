import { AxiosError, AxiosResponse } from 'axios';

export enum ServiceStatusCodes {
  HTTP_200 = 200,
  HTTP_201 = 201,
  HTTP_400 = 400,
  HTTP_401 = 401,
  HTTP_403 = 403,
  HTTP_406 = 406,
  HTTP_404 = 404,
  HTTP_422 = 422,
}

export type FieldError = {
  msg: string;
  loc: string[];
  type: string;
};

export type ServiceErrorResponse<
  Keys extends string | number | symbol = string | number | symbol
> = AxiosError<
  {
    detail?: string;
  } & {
    fieldErrors: {
      [key in Keys]: FieldError;
    };
  }
>;

export type ServiceSuccessResponse = AxiosResponse<{
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}>;
