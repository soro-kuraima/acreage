import React, { LegacyRef, useEffect, useRef } from 'react';

import classNames from 'classnames';

import { LoadingSpinner } from 'components/common';

type Size =
  | 'small'
  | 'medium'
  | 'mediumWide'
  | 'large'
  | 'extraLarge'
  | 'round';
type Variant = 'contained' | 'outlined' | 'text';
type Color = 'primary' | 'secondary' | 'error';
export type ButtonProps = {
  className?: string;
  size?: Size;
  variant?: Variant;
  color?: Color;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses: { [S in Size]: string } = {
  small: 'px-4 py-2',
  medium: 'px-12 py-2 ',
  mediumWide: 'px-16 py-1',
  large: 'px-20 py-2  !text-base',
  extraLarge: 'px-28 py-2  !text-base',
  round: 'rounded-[50%] h-5 w-5 text-md p-0 justify-center',
};
const variantColorClasses: { [V in Variant]: Record<Color, string> } = {
  contained: {
    primary:
      'bg-primary-main text-primary-contrastText hover:bg-primary-light active:bg-primary-main ',
    secondary:
      'bg-background-main text-background-contrastText hover:bg-background-light active:bg-background-main',
    error:
      'bg-error-main text-error-contrastText hover:bg-error-light active:bg-error-main',
  },
  outlined: {
    primary:
      'text-primary-main border  border-primary-main hover:text-primary-light active:border-primary-main active:text-primary-main hover:border-primary-light  ',
    secondary:
      'text-background-light border  border-background-light hover:text-background-main hover:border-background-main   ',
    error:
      'text-error-main border  border-error-main hover:text-error-dark hover:border-error-dark ',
  },
  text: {
    primary:
      ' text-primary-main hover:text-primary-light active:text-primary-main ',
    secondary: 'text-background-contrastText hover:text-primary-main ',
    error: 'text-error-main hover:text-error-dark ',
  },
};

type ButtonDimensions = {
  height: number;
  width: number;
};
export function Button({
  className,
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  disabled = false,
  children,
  loading = false,
  onClick,
  fullWidth,
  ...rest
}: ButtonProps) {
  const spanRef = useRef<HTMLSpanElement>();
  const widthRef = useRef<ButtonDimensions>({ height: 70, width: 50 });
  useEffect(() => {
    widthRef.current.width = spanRef.current?.getBoundingClientRect()
      .width as number;
    widthRef.current.height = spanRef.current?.getBoundingClientRect()
      .height as number;
  }, []);

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(
        'flex rounded text-base !font-semibold items-center   ',
        variantColorClasses[variant][color],
        sizeClasses[size],
        className,
        {
          'w-full': fullWidth,
          ' opacity-60 cursor-not-allowed ': disabled || loading,
        }
      )}
      onClick={loading || disabled ? undefined : onClick}
      {...rest}>
      {loading && (
        <LoadingSpinner
          style={{
            width: widthRef.current.width,
            height: widthRef.current.height,
          }}
        />
      )}
      <span
        className={classNames(
          {
            hidden: loading,
            absolute: loading,
          },
          'flex  items-center'
        )}
        ref={spanRef as LegacyRef<HTMLSpanElement>}>
        {children || 'Click me'}
      </span>
    </button>
  );
}
