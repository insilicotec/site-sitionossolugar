
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToActionSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Action Button - Only Fazer Reserva */}
          <div className="flex justify-center">
            <Link to="/agendamento">
              <Button className="w-full sm:w-auto bg-amber-700 text-white hover:bg-amber-800 px-12 py-4 text-xl font-medium rounded-xl transition-colors shadow-lg">
                <Calendar className="mr-3" size={24} />
                Fazer Reserva
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
