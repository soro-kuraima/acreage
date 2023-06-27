import {
  MutationFunction,
  useMutation,
  UseMutationOptions as ReactQueryUseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import {
  unwrapServiceErrorMessage,
  unwrapServiceSuccessMessage,
} from 'services/unwrap-services-response';
import { ServiceErrorResponse, ServiceSuccessResponse } from 'types/common';

type UseMutationOptions<TData, TError, TVariables, TContext> = Omit<
  ReactQueryUseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationFn'
> & {
  disableSuccessToast?: boolean;
  disableErrorToast?: boolean;
};

export function useMutationWithToast<
  TData = unknown,
  TError = ServiceErrorResponse,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { disableSuccessToast, disableErrorToast, ...nativeReactQueryOptions } =
    options || { disableSuccessToast: false, disableErrorToast: false };

  return useMutation(mutationFn, {
    ...nativeReactQueryOptions,
    onSuccess: (
      data: TData,
      variables: TVariables,
      context: TContext | undefined
    ) => {
      const message = unwrapServiceSuccessMessage(
        data as unknown as ServiceSuccessResponse
      );
      if (message && !disableSuccessToast) {
        toast.success(message);
      }

      return options?.onSuccess?.(data, variables, context);
    },
    onError: (
      error: TError,
      variables: TVariables,
      context: TContext | undefined
    ) => {
      const message = unwrapServiceErrorMessage(
        error as unknown as ServiceErrorResponse
      );

      if (message && !disableErrorToast) {
        toast.error(message);
      }

      return options?.onError?.(error, variables, context);
    },
  });
}
