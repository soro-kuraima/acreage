/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  GridProps,
  TextAreaFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { Users } from '../models';
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersUpdateFormInputValues = {
  firstName?: string;
  lastName?: string;
  profession?: string;
  about?: string;
  profilePicture?: string;
  properties?: string;
};
export declare type UsersUpdateFormValidationValues = {
  firstName?: ValidationFunction<string>;
  lastName?: ValidationFunction<string>;
  profession?: ValidationFunction<string>;
  about?: ValidationFunction<string>;
  profilePicture?: ValidationFunction<string>;
  properties?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
  UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  firstName?: PrimitiveOverrideProps<TextFieldProps>;
  lastName?: PrimitiveOverrideProps<TextFieldProps>;
  profession?: PrimitiveOverrideProps<TextFieldProps>;
  about?: PrimitiveOverrideProps<TextFieldProps>;
  profilePicture?: PrimitiveOverrideProps<TextFieldProps>;
  properties?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    users?: Users;
    onSubmit?: (
      fields: UsersUpdateFormInputValues
    ) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (
      fields: UsersUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UsersUpdateFormInputValues
    ) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function UsersUpdateForm(
  props: UsersUpdateFormProps
): React.ReactElement;
