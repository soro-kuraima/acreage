import React, { ReactNode } from 'react';

import classNames from 'classnames';

type VariantType =
  | 'body1'
  | 'body2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3';

type AlignType = 'center' | 'justify' | 'left' | 'right';
type ColorType =
  | 'primary'
  | 'textPrimary'
  | 'textSecondary'
  | 'textMuted'
  | 'white'
  | 'gray'
  | 'error';
type TypographyProps = {
  className?: string;
  children: ReactNode;
  color?: ColorType;
  variant?: VariantType;
  align?: AlignType;
} & React.HTMLAttributes<HTMLParagraphElement>;

const variantStyleClass: { [V in VariantType]: string } = {
  body1: 'text-sm font-semibold',
  body2: 'text-sm font-normal',

  h1: 'font-bold text-3xl',
  h2: 'font-bold text-2xl',
  h3: 'font-bold text-xl',
  h4: 'font-bold text-lg',
  h5: 'font-bold text-base',
  h6: 'font-bold text-sm',
  subtitle1: 'text-xl font-medium',
  subtitle2: 'text-md ',
  subtitle3: 'text-base',
};
const alignStyleClass: { [A in AlignType]: string } = {
  center: 'text-center',
  justify: 'text-justify',
  left: 'text-left',
  right: 'text-right',
};

const colorClasses: { [C in ColorType]: string } = {
  primary: 'text-primary-light',
  textPrimary: 'text-background-contrastText',
  textSecondary: 'text-background-light',
  textMuted: 'text-zinc-400',
  white: 'text-white',
  gray: 'text-gray-600',
  error: 'text-error-dark',
};
export function Typography({
  children,
  className,
  color = 'textPrimary',
  variant = 'body1',
  align = 'left',
  ...rest
}: TypographyProps) {
  return (
    <p
      className={`flex items-center ${classNames(
        variantStyleClass[variant],
        alignStyleClass[align],
        colorClasses[color],
        className
      )}`}
      {...rest}>
      {children}
    </p>
  );
}
