/**
 * Section Template Component
 * Template para seções padronizadas dentro das páginas
 */

import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/lib/utils';
import type { BaseComponentProps } from '@/types/global';
import React from 'react';

interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'accent' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  centered?: boolean;
  showDivider?: boolean;
}

const variantClasses = {
  default: 'bg-white',
  accent: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
  dark: 'bg-gray-900 text-white'
};

const sizeClasses = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-20',
  xl: 'py-20 md:py-24'
};

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  variant = 'default',
  size = 'md',
  children,
  centered = false,
  showDivider = false,
  className = '',
  ...props
}) => {
  return (
    <section 
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        'relative',
        className
      )}
      {...props}
    >
      {showDivider && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
      )}
      
      <Container>
        {(title || subtitle) && (
          <div className={cn(
            'mb-8 md:mb-12',
            centered && 'text-center max-w-4xl mx-auto'
          )}>
            {title && (
              <Typography
                as="h2"
                variant="h2"
                className={cn(
                  'text-2xl md:text-3xl lg:text-4xl font-bold mb-4',
                  variant === 'dark' ? 'text-white' : 'text-amber-900'
                )}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                as="p"
                variant="body"
                className={cn(
                  'text-lg md:text-xl',
                  variant === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}
              >
                {subtitle}
              </Typography>
            )}
          </div>
        )}
        
        {children}
      </Container>
    </section>
  );
};

export default Section;
