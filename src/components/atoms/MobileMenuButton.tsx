/**
 * Mobile Menu Button Atom Component
 */

import { cn } from '@/lib/utils';
import type { BaseComponentProps } from '@/types/global';
import { Menu, X } from 'lucide-react';
import React from 'react';

interface MobileMenuButtonProps extends BaseComponentProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "md:hidden p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200",
        className
      )}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      {...props}
    >
      <div className="relative w-6 h-6">
        <Menu 
          size={24} 
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          )} 
        />
        <X 
          size={24} 
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          )} 
        />
      </div>
    </button>
  );
};

export default MobileMenuButton;
