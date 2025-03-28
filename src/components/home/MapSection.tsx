
import React from 'react';
import GoogleMap from '@/components/GoogleMap';

const MapSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-amber-50 relative">
      <div className="leaf-pattern absolute inset-0 opacity-20"></div>
      
      <div className="container px-4">
        <div className="text-center mb-16" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
            Como Chegar
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos localizados em Vila Fátima, no Pará, em um local de fácil acesso rodeado pela beleza natural da região.
          </p>
        </div>
        
        <div ref={ref}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
