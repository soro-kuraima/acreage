/* eslint-disable import/no-extraneous-dependencies */
/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from 'react';

import { IconProps, ViewProps } from '@aws-amplify/ui-react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';

export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ArrowleftlineOverridesProps = {
  Arrowleftline?: PrimitiveOverrideProps<ViewProps>;
  Group?: PrimitiveOverrideProps<ViewProps>;
  Vector21737?: PrimitiveOverrideProps<IconProps>;
  Vector21738?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ArrowleftlineProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    overrides?: ArrowleftlineOverridesProps | undefined | null;
  }
>;
export default function Arrowleftline(
  props: ArrowleftlineProps
): React.ReactElement;
