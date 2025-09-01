/**
 * Hero Features Organism Component
 * Feature highlights section for hero
 */

import { Container } from '@/components/atoms/Container';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { Calendar, Hotel, Utensils } from 'lucide-react';
import React from 'react';

const features = [
  {
    id: 'events',
    icon: Calendar,
    title: 'Estrutura completa para eventos',
    description: 'Espaços versáteis para todas as ocasiões'
  },
  {
    id: 'accommodation', 
    icon: Hotel,
    title: 'Hospedagem confortável',
    description: 'Acomodações em meio à natureza'
  },
  {
    id: 'restaurant',
    icon: Utensils,
    title: 'Restaurante completo',
    description: 'Gastronomia com ingredientes frescos'
  }
];

export const HeroFeatures: React.FC = () => {
  return (
    <Container size="lg" className="relative z-10 mb-8 md:mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto px-2 md:px-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant={index === 2 ? 'highlighted' : 'default'}
            className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
          />
        ))}
      </div>
    </Container>
  );
};
