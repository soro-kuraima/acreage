import {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';

import { ServiceErrorResponse } from 'types/common';

export function useAmplifyMutation<
  TData = unknown,
  TError = ServiceErrorResponse,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation(mutationFn, {
    ...options,
    onSuccess: (
      data: TData,
      variables: TVariables,
      context: TContext | undefined
    ) => options?.onSuccess?.(data, variables, context),
    onError: (
      error: TError,
      variables: TVariables,
      context: TContext | undefined
    ) => options?.onError?.(error, variables, context),
  });
}
