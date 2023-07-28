import React from 'react';

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary' | 'error';

export type ChipProps = {
  className?: string;
  size?: Size;
  color?: Color;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const sizeClasses: { [S in Size]: string } = {
  small: 'h-8 w-8 text-md',
  medium: 'h-6 w-6 text-md lg:h-10 lg:w-10 lg:text-lg',
  large: 'h-12 w-12 text-lg',
};

const colorClasses: { [C in Color]: string } = {
  primary: 'bg-primary-main text-primary-contrastText',
  secondary: 'bg-background-main text-background-contrastText',
  error: 'bg-error-main text-error-contrastText',
};

export function Steps({
  className,
  size = 'medium',
  color = 'primary',
  children,
}: ChipProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[50%] ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children || 'Step'}
    </div>
  );
}
