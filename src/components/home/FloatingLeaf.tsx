
import React from 'react';
import { Leaf } from 'lucide-react';

interface FloatingLeafProps {
  delay?: number;
  size?: number;
  left?: string;
  duration?: number;
}

const FloatingLeaf = ({
  delay = 0,
  size = 24,
  left = "10%",
  duration = 15
}: FloatingLeafProps) => {
  return (
    <div 
      className="absolute text-sitio-leaf opacity-70 animate-float pointer-events-none" 
      style={{
        left,
        top: `-${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <Leaf size={size} className="animate-leaf-sway" />
    </div>
  );
};

export default FloatingLeaf;
