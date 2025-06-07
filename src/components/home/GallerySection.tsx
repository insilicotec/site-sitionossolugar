
import CarouselGallery from '@/components/CarouselGallery';

const GallerySection = ({ photos, useIntersectionObserver }: { 
  photos: Array<{ id: number; src: string; alt: string; }>;
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50/30 to-amber-50/20 relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Galeria de Momentos
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Reviva os momentos especiais capturados em nossos espaços, onde cada imagem conta uma história de alegria e celebração.
          </p>        </div>
        
        {/* Carousel Gallery */}
        <div className="relative" ref={ref}>
          <CarouselGallery photos={photos} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
