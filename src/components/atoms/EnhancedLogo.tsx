/**
 * Enhanced Logo Atom Component
 * Componente básico para exibição do logo com múltiplas variantes
 */

import { LOGO_ASSETS } from '@/assets/constants/images';
import { cn } from '@/lib/utils';
import type { BaseComponentProps } from '@/types/global';
import React from 'react';
import { Link } from 'react-router-dom';

interface EnhancedLogoProps extends BaseComponentProps {
  variant?: 'navbar' | 'hero' | 'footer';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  interactive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8', 
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20 md:h-28 md:w-28'
};

const variantClasses = {
  navbar: {
    container: "flex items-center gap-3 group transition-all duration-300",
    image: "group-hover:rotate-6 transition-transform duration-300",
    title: "text-gray-900 leading-tight bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 bg-clip-text text-transparent font-display font-bold text-2xl",
    subtitle: "text-xs font-normal text-amber-800 leading-tight opacity-95"
  },
  hero: {
    container: "mb-6 md:mb-8 text-center",
    image: "mx-auto",
    title: "",
    subtitle: ""
  },
  footer: {
    container: "flex items-center gap-2",
    image: "",
    title: "text-gray-700 text-sm font-medium",
    subtitle: "text-xs text-gray-500"
  }
};

export const EnhancedLogo: React.FC<EnhancedLogoProps> = ({
  variant = 'navbar',
  size = 'md',
  showText = true,
  interactive = true,
  onClick,
  className = '',
  ...props
}) => {
  const currentVariant = variantClasses[variant];
  
  const logoElement = (
    <div className={cn(currentVariant.container, className)} {...props}>
      <div className="relative">
        <img
          src={LOGO_ASSETS.main}
          alt="Sítio Nosso Lugar Logo"
          className={cn(
            sizeClasses[size],
            'object-contain',
            currentVariant.image
          )}
        />
        {variant === 'navbar' && interactive && (
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        )}
      </div>
      
      {showText && variant !== 'hero' && (
        <div className="flex flex-col">
          <span className={currentVariant.title}>
            Sítio Nosso Lugar
          </span>
          <span className={currentVariant.subtitle}>
            Eventos & Hospedagem
          </span>
        </div>
      )}
    </div>
  );

  if (interactive && variant !== 'hero') {
    return (
      <Link
        to="/"
        onClick={onClick}
        className={cn("hover:scale-105 transition-all duration-300", variant === 'navbar' && "block")}
      >
        {logoElement}
      </Link>
    );
  }

  return logoElement;
};

export default EnhancedLogo;
