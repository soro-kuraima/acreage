/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  GridProps,
  SelectFieldProps,
  TextAreaFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react';
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
export declare type PropertiesUpdateFormInputValues = {
  title?: string;
  noOfBhk?: number;
  price?: number;
  builtUpArea?: number;
  description?: string;
  address?: string;
  pincode?: number;
  city?: string;
  state?: string;
  ageOfProperty?: number;
  propertyType?: string;
  salesType?: string;
  facing?: string;
  propertyImages?: string[];
  shareHolders?: string[];
};
export declare type PropertiesUpdateFormValidationValues = {
  title?: ValidationFunction<string>;
  noOfBhk?: ValidationFunction<number>;
  price?: ValidationFunction<number>;
  builtUpArea?: ValidationFunction<number>;
  description?: ValidationFunction<string>;
  address?: ValidationFunction<string>;
  pincode?: ValidationFunction<number>;
  city?: ValidationFunction<string>;
  state?: ValidationFunction<string>;
  ageOfProperty?: ValidationFunction<number>;
  propertyType?: ValidationFunction<string>;
  salesType?: ValidationFunction<string>;
  facing?: ValidationFunction<string>;
  propertyImages?: ValidationFunction<string>;
  shareHolders?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type PropertiesUpdateFormOverridesProps = {
  PropertiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  noOfBhk?: PrimitiveOverrideProps<TextFieldProps>;
  price?: PrimitiveOverrideProps<TextFieldProps>;
  builtUpArea?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  address?: PrimitiveOverrideProps<TextFieldProps>;
  pincode?: PrimitiveOverrideProps<TextFieldProps>;
  city?: PrimitiveOverrideProps<TextFieldProps>;
  state?: PrimitiveOverrideProps<TextFieldProps>;
  ageOfProperty?: PrimitiveOverrideProps<TextFieldProps>;
  propertyType?: PrimitiveOverrideProps<SelectFieldProps>;
  salesType?: PrimitiveOverrideProps<SelectFieldProps>;
  facing?: PrimitiveOverrideProps<SelectFieldProps>;
  propertyImages?: PrimitiveOverrideProps<TextFieldProps>;
  shareHolders?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PropertiesUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: PropertiesUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    properties?: Properties;
    onSubmit?: (
      fields: PropertiesUpdateFormInputValues
    ) => PropertiesUpdateFormInputValues;
    onSuccess?: (fields: PropertiesUpdateFormInputValues) => void;
    onError?: (
      fields: PropertiesUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: PropertiesUpdateFormInputValues
    ) => PropertiesUpdateFormInputValues;
    onValidate?: PropertiesUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function PropertiesUpdateForm(
  props: PropertiesUpdateFormProps
): React.ReactElement;
