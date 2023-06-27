import {
  ServiceErrorResponse,
  ServiceStatusCodes,
  ServiceSuccessResponse,
} from 'types/common';

const validRequestTypes = ['post', 'patch', 'put', 'delete'];

export const unwrapServiceSuccessMessage = (
  response: ServiceSuccessResponse
): string | null => {
  const { config } = response;

  if (response.status !== ServiceStatusCodes.HTTP_200) return null;
  if (!validRequestTypes.includes(config.method || '')) return null;

  return response.data.detail || response.data.details || null;
};

export const unwrapServiceErrorMessage = (
  error: ServiceErrorResponse
): string | null => {
  const responseStatus = error.response?.status;
  const requestMethod = error?.config?.method;

  if (!error.response) return null;
  if (responseStatus === ServiceStatusCodes.HTTP_422) return null;
  if (!validRequestTypes.includes(requestMethod || '')) return null;

  const SOMETHING_WENT_WRONG = 'Something went wrong.';

  if (typeof error.response?.data.detail === 'string') {
    return error.response?.data.detail || null;
  }

  return SOMETHING_WENT_WRONG;
};
