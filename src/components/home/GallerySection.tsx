
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { Leaf } from 'lucide-react';

const GallerySection = ({ photos, useIntersectionObserver }: { 
  photos: Array<{ id: number; src: string; alt: string; }>;
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-amber-50 relative">
      <div className="leaf-pattern absolute inset-0 opacity-20"></div>
      <div className="absolute top-20 right-20 text-amber-700/10">
        <Leaf size={180} />
      </div>
      <div className="absolute bottom-20 left-20 text-amber-700/10">
        <Leaf size={140} className="rotate-45" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
            Galeria de Momentos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Capture a essência do Sítio Nosso Lugar através das imagens que registram eventos especiais, 
            casamentos inesquecíveis e momentos de lazer em nossa natureza exuberante.
          </p>
        </div>
        
        <div className="relative px-10" ref={ref}>
          <CarouselGallery photos={photos} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
