/**
 * WhatsApp contact button component
 * Provides floating action button for WhatsApp contact
 */

import { AnalyticsService } from '@/services/analytics';
import { WhatsAppService } from '@/services/whatsapp';
import type { BaseComponentProps } from '@/types/global';
import { MessageCircle } from 'lucide-react';
import React from 'react';

interface WhatsappButtonProps extends BaseComponentProps {
  phone: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg';
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phone,
  message,
  position = 'bottom-right',
  size = 'md',
  className = '',
  ...props
}) => {
  const handleClick = () => {
    AnalyticsService.trackWhatsAppClick('general');
    WhatsAppService.openChat(message || 'Olá! Gostaria de mais informações.');
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed ${positionClasses[position]} ${sizeClasses[size]}
        bg-green-500 hover:bg-green-600 
        text-white rounded-full shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        transform hover:scale-110 active:scale-95
        z-50 group
        ${className}
      `}
      aria-label="Contato via WhatsApp"
      title="Fale conosco pelo WhatsApp"
      {...props}
    >
      <MessageCircle
        size={iconSizes[size]}
        className="group-hover:rotate-12 transition-transform duration-300"
      />


    </button>
  );
};

export default WhatsappButton;
