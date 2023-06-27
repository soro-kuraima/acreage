/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseMutationResult } from '@tanstack/react-query';
import { FieldErrors } from 'react-hook-form';

import { ServiceErrorResponse } from 'types/common';

export const extractValidationErrors = <
  T extends UseMutationResult<any, ServiceErrorResponse, any, any>
>(
  key: string,
  mutation: T,
  errors?: FieldErrors
) => ({
  hasError:
    !!mutation.error?.response?.data?.fieldErrors?.[key]?.msg ||
    !!errors?.[key]?.message?.toString(),
  msg:
    mutation.error?.response?.data?.fieldErrors?.[key]?.msg ||
    errors?.[key]?.message?.toString() ||
    '',
});
