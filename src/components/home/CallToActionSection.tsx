
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Action Button - Voltar ao topo */}
          <div className="flex justify-center px-4">
            <Button 
              onClick={scrollToTop}
              className="w-full sm:w-auto bg-amber-700 text-white hover:bg-amber-800 px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-medium rounded-xl transition-colors shadow-lg"
            >
              <ChevronUp className="mr-2 sm:mr-3" size={20} />
              Voltar ao Topo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
