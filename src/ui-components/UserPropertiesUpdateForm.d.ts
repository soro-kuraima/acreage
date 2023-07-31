/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { AutocompleteProps, GridProps } from '@aws-amplify/ui-react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { UserProperties as UserProperties0, Properties } from '../models';
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserPropertiesUpdateFormInputValues = {
  UserProperties?: Properties[];
};
export declare type UserPropertiesUpdateFormValidationValues = {
  UserProperties?: ValidationFunction<Properties>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UserPropertiesUpdateFormOverridesProps = {
  UserPropertiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  UserProperties?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserPropertiesUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: UserPropertiesUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    userProperties?: UserProperties0;
    onSubmit?: (
      fields: UserPropertiesUpdateFormInputValues
    ) => UserPropertiesUpdateFormInputValues;
    onSuccess?: (fields: UserPropertiesUpdateFormInputValues) => void;
    onError?: (
      fields: UserPropertiesUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UserPropertiesUpdateFormInputValues
    ) => UserPropertiesUpdateFormInputValues;
    onValidate?: UserPropertiesUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function UserPropertiesUpdateForm(
  props: UserPropertiesUpdateFormProps
): React.ReactElement;
