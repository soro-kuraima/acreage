/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal';
import { TextProps, ViewProps } from '@aws-amplify/ui-react';
import { ProfileProps } from './Profile';
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type SideNavigationOverridesProps = {
  SideNavigation?: PrimitiveOverrideProps<ViewProps>;
  '\u270F\uFE0F Menu 1'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 2'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 3'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 4'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 5'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 6'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 7'?: PrimitiveOverrideProps<TextProps>;
  '\u270F\uFE0F Menu 8'?: PrimitiveOverrideProps<TextProps>;
  Controller?: PrimitiveOverrideProps<ViewProps>;
  Profile?: ProfileProps;
} & EscapeHatchProps;
export declare type SideNavigationProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    overrides?: SideNavigationOverridesProps | undefined | null;
  }
>;
export default function SideNavigation(
  props: SideNavigationProps
): React.ReactElement;
