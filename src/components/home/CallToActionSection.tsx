
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

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
              asChild
              className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-800/25 transform hover:-translate-y-0.5 hover:scale-105 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-amber-500/70 animate-sheen-btn animate-float relative z-10"
            >
              <a href="/agendamento">
                <Calendar className="mr-2 h-5 w-5" />
                Entre em contato conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
