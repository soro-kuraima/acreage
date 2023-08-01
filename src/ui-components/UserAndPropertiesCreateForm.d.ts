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
export declare type UserAndPropertiesCreateFormInputValues = {
  userAndProperties?: Properties[];
};
export declare type UserAndPropertiesCreateFormValidationValues = {
  userAndProperties?: ValidationFunction<Properties>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UserAndPropertiesCreateFormOverridesProps = {
  UserAndPropertiesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userAndProperties?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserAndPropertiesCreateFormProps = React.PropsWithChildren<
  {
    overrides?: UserAndPropertiesCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: UserAndPropertiesCreateFormInputValues
    ) => UserAndPropertiesCreateFormInputValues;
    onSuccess?: (fields: UserAndPropertiesCreateFormInputValues) => void;
    onError?: (
      fields: UserAndPropertiesCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UserAndPropertiesCreateFormInputValues
    ) => UserAndPropertiesCreateFormInputValues;
    onValidate?: UserAndPropertiesCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function UserAndPropertiesCreateForm(
  props: UserAndPropertiesCreateFormProps
): React.ReactElement;
