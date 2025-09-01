/**
 * Typography Atom Components
 * Consistent text styling throughout the application
 */

import type { BaseComponentProps } from '@/types/global';
import React from 'react';

interface TypographyProps extends BaseComponentProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'gray' | 'white' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-bold leading-tight',
  h4: 'text-xl md:text-2xl font-semibold leading-tight',
  h5: 'text-lg md:text-xl font-semibold leading-snug',
  h6: 'text-base md:text-lg font-semibold leading-snug',
  body: 'text-base leading-relaxed',
  caption: 'text-sm leading-normal',
  overline: 'text-xs font-medium uppercase tracking-wide leading-normal'
};

const colorClasses = {
  primary: 'text-amber-900',
  secondary: 'text-green-700',
  gray: 'text-gray-700',
  white: 'text-white',
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600'
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

const weightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'gray',
  align = 'left',
  weight,
  as,
  className = '',
  ...props
}) => {
  // Default HTML elements for each variant
  const defaultElement = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    caption: 'span',
    overline: 'span'
  }[variant];

  const Component = (as || defaultElement) as keyof JSX.IntrinsicElements;

  const classes = `
    ${variantClasses[variant]}
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${weight ? weightClasses[weight] : ''}
    ${className}
  `.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Convenience components for common use cases
export const Heading: React.FC<Omit<TypographyProps, 'variant'> & { level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({
  level,
  ...props
}) => {
  const variant = `h${level}` as TypographyProps['variant'];
  return <Typography variant={variant} {...props} />;
};

export const Text: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Overline: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="overline" {...props} />
);
