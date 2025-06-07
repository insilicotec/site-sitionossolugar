
import { Calendar, MessageSquare, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToActionSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-20 left-16 text-white/8">
        <Heart size={120} />
      </div>
      <div className="absolute bottom-20 right-16 text-white/8">
        <Star size={100} />
      </div>
      
      <div className="container px-6 mx-auto text-center relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reserve Agora Seu Evento
            </h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed font-light">
              Transforme seus sonhos em realidade em um cenário único, onde a natureza se encontra com o conforto para criar momentos inesquecíveis.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-amber-200/20">
                <Calendar size={32} className="text-amber-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Agendamento Fácil</h3>
              <p className="text-amber-100 leading-relaxed">Processo simples e rápido para reservar suas datas especiais.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-amber-200/20">
                <Heart size={32} className="text-amber-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Atendimento Personalizado</h3>
              <p className="text-amber-100 leading-relaxed">Equipe dedicada para tornar seu evento único e especial.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-amber-200/20">
                <Star size={32} className="text-amber-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Experiência Única</h3>
              <p className="text-amber-100 leading-relaxed">Momentos especiais em meio à natureza exuberante da região.</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/agendamento">
              <Button className="w-full sm:w-auto bg-white text-amber-800 hover:bg-amber-50 px-12 py-4 text-xl font-medium rounded-xl transition-colors shadow-lg">
                <Calendar className="mr-3" size={24} />
                Fazer Reserva
              </Button>
            </Link>
            
            <a href="https://wa.me/559184731385" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm px-12 py-4 text-xl font-medium rounded-xl transition-colors">
                <MessageSquare className="mr-3" size={24} />
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
