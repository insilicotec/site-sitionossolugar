
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MapSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-white to-gray-50/30 relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Como Chegar
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Encontre-nos facilmente em Vila Fátima, Pará, em um local privilegiado cercado pela exuberante natureza amazônica.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center" ref={ref}>
          <Link to="/como-chegar">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 text-xl font-medium rounded-xl transition-colors">
              <Navigation className="mr-3" size={24} />
              Ver Como Chegar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
