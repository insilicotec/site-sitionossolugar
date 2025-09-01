/**
 * Feature Card Molecule Component
 * Card component for displaying features with icon, title and description
 */

import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';
import type { BaseComponentProps } from '@/types/global';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface FeatureCardProps extends BaseComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'highlighted' | 'compact';
  iconColor?: 'primary' | 'secondary' | 'gray';
}

const variantClasses = {
  default: 'bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-amber-200/50',
  highlighted: 'bg-amber-50/90 backdrop-blur-sm p-4 md:p-5 rounded-xl border-2 border-amber-300/50 shadow-md',
  compact: 'bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-200/50'
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  iconColor = 'primary',
  className = '',
  ...props
}) => {
  const iconSize = variant === 'compact' ? 'sm' : 'md';
  const titleVariant = variant === 'compact' ? 'h6' : 'h5';
  const descriptionVariant = variant === 'compact' ? 'caption' : 'body';

  return (
    <div
      className={`
        ${variantClasses[variant]}
        flex items-center space-x-3 md:space-x-4
        transition-all duration-300 hover:shadow-md hover:scale-105
        ${className}
      `}
      {...props}
    >
      <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
        <Icon 
          icon={icon} 
          size={iconSize}
          color={iconColor}
        />
      </div>
      <div className="flex-1">
        <Typography 
          variant={titleVariant}
          color="gray"
          className="mb-1"
        >
          {title}
        </Typography>
        {variant !== 'compact' && (
          <Typography 
            variant={descriptionVariant}
            color="gray"
            className="text-sm md:text-base"
          >
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};
