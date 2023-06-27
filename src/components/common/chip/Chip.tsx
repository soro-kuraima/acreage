import React from 'react';

type Size = 'small' | 'medium' | 'large' | 'round';
type Color = 'primary' | 'secondary' | 'error';

export type ChipProps = {
  className?: string;
  size?: Size;
  color?: Color;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const sizeClasses: { [S in Size]: string } = {
  small: 'px-1 py-1 text-sm',
  medium: 'px-2 py-1 text-md',
  large: 'px-10 py-1 text-md',
  round: 'rounded-[50%] h-6 w-6 p-1',
};

const colorClasses: { [C in Color]: string } = {
  primary: 'bg-primary-main text-primary-contrastText',
  secondary: 'bg-background-main text-background-contrastText',
  error: 'bg-error-main text-error-contrastText',
};

export function Chip({
  className,
  size = 'medium',
  color = 'primary',
  children,
}: ChipProps) {
  return (
    <div
      className={`rounded w-max flex items-center justify-center ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children || 'Status'}
    </div>
  );
}
