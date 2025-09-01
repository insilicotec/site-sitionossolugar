/**
 * Call-to-Action Button Molecule Component
 * Enhanced button component with various styles and states
 */

import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/ui/button';
import type { BaseComponentProps } from '@/types/global';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps extends BaseComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  primary: `
    bg-amber-800 hover:bg-amber-900 text-white
    hover:shadow-lg hover:shadow-amber-800/25
    transform hover:-translate-y-0.5 hover:scale-105
    animate-sheen-btn animate-float
  `,
  secondary: `
    bg-green-600 hover:bg-green-700 text-white
    hover:shadow-lg hover:shadow-green-600/25
    transform hover:-translate-y-0.5
  `,
  outline: `
    bg-white text-amber-800 border-2 border-amber-800
    hover:bg-amber-800 hover:text-white
    hover:shadow-lg hover:shadow-amber-800/25
    transform hover:-translate-y-0.5
  `,
  ghost: `
    bg-transparent text-amber-800 hover:bg-amber-50
    border border-transparent hover:border-amber-200
  `
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-12 py-4 text-lg'
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  external = false,
  loading = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const buttonClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    font-medium rounded-lg
    transition-all duration-300
    focus-visible:ring-2 focus-visible:ring-amber-500/70
    relative z-10
    inline-flex items-center justify-center gap-2
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  const ButtonContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <Icon 
          icon={icon} 
          size={size === 'lg' ? 'md' : 'sm'} 
          color="white"
        />
      )}
      {loading ? 'Carregando...' : children}
      {icon && iconPosition === 'right' && (
        <Icon 
          icon={icon} 
          size={size === 'lg' ? 'md' : 'sm'} 
          color="white"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...props}
        >
          <ButtonContent />
        </a>
      );
    }

    return (
      <Link to={href} className={buttonClasses} {...props}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      <ButtonContent />
    </Button>
  );
};
