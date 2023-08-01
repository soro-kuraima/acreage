/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { AutocompleteProps, GridProps } from '@aws-amplify/ui-react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { UserAndProperties, Properties } from '../models';
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserAndPropertiesUpdateFormInputValues = {
  userAndProperties?: Properties[];
};
export declare type UserAndPropertiesUpdateFormValidationValues = {
  userAndProperties?: ValidationFunction<Properties>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type UserAndPropertiesUpdateFormOverridesProps = {
  UserAndPropertiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userAndProperties?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserAndPropertiesUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: UserAndPropertiesUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    userAndProperties?: UserAndProperties;
    onSubmit?: (
      fields: UserAndPropertiesUpdateFormInputValues
    ) => UserAndPropertiesUpdateFormInputValues;
    onSuccess?: (fields: UserAndPropertiesUpdateFormInputValues) => void;
    onError?: (
      fields: UserAndPropertiesUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: UserAndPropertiesUpdateFormInputValues
    ) => UserAndPropertiesUpdateFormInputValues;
    onValidate?: UserAndPropertiesUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function UserAndPropertiesUpdateForm(
  props: UserAndPropertiesUpdateFormProps
): React.ReactElement;
