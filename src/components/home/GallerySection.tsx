
import React from 'react';
import PhotoGallery from '@/components/PhotoGallery';

const GallerySection = ({ photos, useIntersectionObserver }: { 
  photos: Array<{ id: number; src: string; alt: string; }>;
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-amber-50 relative">
      <div className="leaf-pattern absolute inset-0 opacity-20"></div>
      
      <div className="container px-4">
        <div className="text-center mb-12" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
            Galeria de Momentos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Capture a essência do Sítio Nosso Lugar através das imagens que registram a beleza natural e os momentos especiais aqui vividos.
          </p>
        </div>
        
        <div ref={ref}>
          <PhotoGallery photos={photos} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
