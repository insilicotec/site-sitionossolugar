/**
 * Container Atom Component
 * Responsive container with consistent max-widths and padding
 */

import type { BaseComponentProps } from '@/types/global';
import React from 'react';

interface ContainerProps extends BaseComponentProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
};

const paddingClasses = {
  none: '',
  sm: 'px-4',
  md: 'px-4 md:px-6',
  lg: 'px-4 md:px-8'
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md',
  center = true,
  as = 'div',
  className = '',
  ...props
}) => {
  const Component = as as keyof JSX.IntrinsicElements;

  const classes = `
    ${sizeClasses[size]}
    ${paddingClasses[padding]}
    ${center ? 'mx-auto' : ''}
    ${className}
  `.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
