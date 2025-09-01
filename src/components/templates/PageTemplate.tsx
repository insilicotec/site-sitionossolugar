/**
 * Page Layout Template
 * Template base para todas as páginas do site
 */

import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import type { BaseComponentProps } from '@/types/global';
import { motion } from 'framer-motion';
import React from 'react';

interface PageTemplateProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  headerClassName?: string;
  children: React.ReactNode;
  containerVariant?: 'default' | 'wide' | 'narrow' | 'full';
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  showHeader = true,
  headerClassName = '',
  children,
  containerVariant = 'default',
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50 ${className}`}
      {...props}
    >
      {showHeader && (title || subtitle) && (
        <Container className={`pt-24 pb-8 ${headerClassName}`}>
          <div className="text-center max-w-4xl mx-auto">
            {title && (
              <Typography
                as="h1"
                variant="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4"
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                as="p"
                variant="body"
                className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              >
                {subtitle}
              </Typography>
            )}
          </div>
        </Container>
      )}
      
      <div className={showHeader && (title || subtitle) ? '' : 'pt-20'}>
        {children}
      </div>
    </motion.div>
  );
};

export default PageTemplate;
