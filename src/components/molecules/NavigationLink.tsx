/**
 * Navigation Link Molecule Component
 * Enhanced navigation link with consistent styling and states
 */

import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';
import type { BaseComponentProps, NavigationItem } from '@/types/global';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationLinkProps extends BaseComponentProps {
  item: NavigationItem;
  variant?: 'desktop' | 'mobile';
  showIcon?: boolean;
  icon?: LucideIcon;
  onClose?: () => void;
}

const variantClasses = {
  desktop: `
    text-gray-700 hover:text-amber-800 
    transition-colors duration-200 
    font-medium relative
    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
    after:bg-amber-800 after:transition-all after:duration-300
    hover:after:w-full
  `,
  mobile: `
    text-gray-800 hover:text-amber-800
    py-3 px-4 border-b border-gray-200 last:border-b-0
    transition-all duration-200
    hover:bg-amber-50 hover:pl-6
  `
};

const activeClasses = {
  desktop: 'text-amber-800 after:w-full',
  mobile: 'text-amber-800 bg-amber-50 border-amber-200'
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  item,
  variant = 'desktop',
  showIcon = false,
  icon,
  onClose,
  className = '',
  ...props
}) => {
  const location = useLocation();
  const isActive = location.pathname === item.href || 
    (item.href !== '/' && location.pathname.startsWith(item.href));

  const handleClick = () => {
    if (onClose) onClose();
  };

  const LinkContent = () => (
    <div className="flex items-center gap-2">
      {showIcon && icon && (
        <Icon 
          icon={icon} 
          size="sm" 
          color={isActive ? 'primary' : 'gray'} 
        />
      )}
      <Typography
        variant={variant === 'mobile' ? 'body' : 'caption'}
        weight="medium"
        className="transition-colors duration-200"
      >
        {item.label}
      </Typography>
    </div>
  );

  const linkClasses = `
    ${variantClasses[variant]}
    ${isActive ? activeClasses[variant] : ''}
    ${className}
  `.trim();

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        onClick={handleClick}
        {...props}
      >
        <LinkContent />
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className={linkClasses}
      onClick={handleClick}
      {...props}
    >
      <LinkContent />
    </Link>
  );
};
