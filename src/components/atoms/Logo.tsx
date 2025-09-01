/**
 * Logo Atom Component
 * Componente básico para exibição do logo da empresa
 */

import { LOGO_ASSETS } from '@/assets/constants/images';
import { APP_CONFIG } from '@/lib/constants';
import type { BaseComponentProps } from '@/types/global';
import React from 'react';

interface LogoProps extends BaseComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'main' | 'favicon';
  showText?: boolean;
}

const sizeClasses = {
  xs: 'h-8 w-8',
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-20 w-20 md:h-28 md:w-28',
  xl: 'h-32 w-32'
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'main',
  showText = false,
  className = '',
  ...props
}) => {
  const logoSrc = variant === 'main' ? LOGO_ASSETS.main : LOGO_ASSETS.favicon;

  if (showText) {
    return (
      <div className={`flex items-center gap-3 ${className}`} {...props}>
        <img
          src={logoSrc}
          alt={`${APP_CONFIG.name} Logo`}
          className={`${sizeClasses[size]} object-contain`}
        />
        <span className="text-lg font-bold text-amber-900">
          {APP_CONFIG.name}
        </span>
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={`${APP_CONFIG.name} Logo`}
      className={`${sizeClasses[size]} object-contain ${className}`}
      {...props}
    />
  );
};
