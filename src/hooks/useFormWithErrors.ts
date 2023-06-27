import { useCallback, useEffect, useMemo } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutationResult } from '@tanstack/react-query';
import { useForm, FieldValues, Path } from 'react-hook-form';
import ObjectSchema, { ObjectShape } from 'yup/lib/object';

import { ServiceErrorResponse } from 'types/common';
// type DefaultValue = { [x: string]: string };

// interface DefaultValuesType {
//   [x: string]: string | DefaultValue;
// }
interface UseFormWithErrorsProps {
  // eslint-disable-next-line
  mutation: UseMutationResult<any, ServiceErrorResponse, any, any>;
  schema: ObjectSchema<ObjectShape>;
}

export function useFormWithErrors<TFieldValues extends FieldValues>({
  mutation,
  schema,
}: UseFormWithErrorsProps) {
  const {
    handleSubmit,
    control,
    reset,
    formState,
    setValue,
    watch,
    setError,
    register,
    unregister,
    resetField,
    clearErrors,
    setFocus,
    getValues,
    getFieldState,
    trigger,
  } = useForm<TFieldValues>({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const fieldNames = useMemo(() => Object.keys(schema.fields), [schema]);
  const snakeCaseToCamelCase = useCallback(
    (str: string) =>
      str
        .toLowerCase()
        .replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase().replace('-', '').replace('_', '')
        ),
    []
  );

  const getErrors = useCallback(() => {
    if (mutation) {
      if (mutation.error?.response?.data?.fieldErrors) {
        const mutationErrors = Object.values(
          mutation.error?.response?.data?.fieldErrors
        );

        mutationErrors.forEach((error) => {
          const backEndFieldName = error.loc.reduce(
            (acc, item) => `${acc}.${snakeCaseToCamelCase(item)}`
          );

          fieldNames?.some((fieldName) => {
            if (backEndFieldName.includes(fieldName)) {
              setError(fieldName as Path<TFieldValues>, {
                type: 'custom',
                message: error.msg,
              });
            }

            return backEndFieldName.includes(fieldName);
          });
        });
      }
    }
  }, [fieldNames, mutation, setError, snakeCaseToCamelCase]);

  useEffect(() => {
    getErrors();
    // eslint-disable-next-line
  }, [mutation.error]);

  return {
    handleSubmit,
    control,
    reset,
    formState,
    errors,
    setValue,
    watch,
    setError,
    register,
    unregister,
    resetField,
    clearErrors,
    setFocus,
    getValues,
    getFieldState,
    trigger,
  };
}
