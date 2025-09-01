/**
 * Hero Content Organism Component
 * Main content area of hero section with title, description and CTAs
 */

import { CONTACT_INFO } from '@/assets/constants/contacts';
import { Container } from '@/components/atoms/Container';
import { EnhancedLogo } from '@/components/atoms/EnhancedLogo';
import { Heading, Text } from '@/components/atoms/Typography';
import { CTAButton } from '@/components/molecules/CTAButton';
import { Calendar, Instagram } from 'lucide-react';
import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <Container size="lg" className="relative z-10 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <EnhancedLogo variant="hero" size="xl" showText={false} interactive={false} />
        </div>
        
        {/* Main title */}
        <Heading 
          level={1} 
          color="primary"
          className="mb-4 md:mb-6 px-2"
        >
          Eventos e Hospedagem
          <span className="block text-amber-800">em Meio à Natureza</span>
        </Heading>
        
        {/* Subtitle */}
        <Text 
          className="max-w-3xl mx-auto mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-0"
          color="gray"
        >
          Um refúgio natural perfeito para{' '}
          <span className="text-amber-800 font-semibold">seus momentos mais especiais</span>, 
          onde a natureza e o conforto se encontram para criar experiências inesquecíveis.
        </Text>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton
            variant="primary"
            size="lg"
            icon={Calendar}
            href="/agendamento"
          >
            Entre em contato conosco
          </CTAButton>
          
          <CTAButton
            variant="outline"
            size="lg"
            icon={Instagram}
            href={CONTACT_INFO.socialMedia.instagram}
            external
          >
            Instagram
          </CTAButton>
        </div>
      </div>
    </Container>
  );
};
