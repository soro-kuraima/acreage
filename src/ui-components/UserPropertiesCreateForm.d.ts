/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { AutocompleteProps, GridProps } from '@aws-amplify/ui-react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { Properties } from '../models';
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserPropertiesCreateFormInputValues = {
  UserProperties?: Properties[];
};
export declare type UserPropertiesCreateFormValidationValues = {
  UserProperties?: ValidationFunction<Properties>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UserPropertiesCreateFormOverridesProps = {
  UserPropertiesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  UserProperties?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserPropertiesCreateFormProps = React.PropsWithChildren<
  {
    overrides?: UserPropertiesCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: UserPropertiesCreateFormInputValues
    ) => UserPropertiesCreateFormInputValues;
    onSuccess?: (fields: UserPropertiesCreateFormInputValues) => void;
    onError?: (
      fields: UserPropertiesCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UserPropertiesCreateFormInputValues
    ) => UserPropertiesCreateFormInputValues;
    onValidate?: UserPropertiesCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function UserPropertiesCreateForm(
  props: UserPropertiesCreateFormProps
): React.ReactElement;
