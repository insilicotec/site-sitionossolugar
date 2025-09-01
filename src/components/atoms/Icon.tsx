/**
 * Icon Atom Component
 * Wrapper for Lucide React icons with consistent styling
 */

import type { BaseComponentProps } from '@/types/global';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface IconProps extends BaseComponentProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'gray' | 'white' | 'success' | 'warning' | 'error';
  variant?: 'solid' | 'outline';
}

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10'
};

const colorClasses = {
  primary: 'text-amber-700',
  secondary: 'text-green-600',
  gray: 'text-gray-600',
  white: 'text-white',
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600'
};

const variantClasses = {
  solid: '',
  outline: 'stroke-2'
};

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  color = 'gray',
  variant = 'solid',
  className = '',
  ...props
}) => {
  return (
    <IconComponent
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    />
  );
};
