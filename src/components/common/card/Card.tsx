import React from 'react';

type variant = 'square' | 'wide';

export type CardProps = {
  className?: string;
  variant?: variant;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const VariantClasses: { [V in variant]: string } = {
  square: 'flex justify-center items-center',
  wide: 'w-full flex items-center',
};

export function Card({ className, variant = 'square', children }: CardProps) {
  return (
    <div className={`rounded p-0 ${VariantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
