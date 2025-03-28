
import React from 'react';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToActionSection = ({ useIntersectionObserver }: {
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white relative overflow-hidden">
      <div className="absolute top-10 left-10 text-white/20 animate-pulse">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/20 animate-pulse" style={{animationDelay: "1s"}}>
        <Sparkles size={30} />
      </div>
      <div className="absolute top-1/2 right-1/4 text-white/10 animate-pulse" style={{animationDelay: "1.5s"}}>
        <Sparkles size={50} />
      </div>
      
      <div className="absolute -top-20 -right-20 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-76.4C53.2,-67.8,58.5,-51.5,65.3,-37.2C72,-22.9,80.3,-10.7,81.2,2.2C82.2,15.1,76,30.9,66.2,42.6C56.4,54.3,43.1,62.1,29.2,69.7C15.3,77.4,0.8,85,-14.9,85.1C-30.5,85.2,-47.3,77.8,-58.8,65.9C-70.3,54,-76.6,37.5,-79.8,21C-83.1,4.4,-83.3,-12.3,-76.3,-24.9C-69.3,-37.6,-55,-46.2,-41.8,-53.9C-28.5,-61.5,-16.1,-68.2,0,-68.3C16.2,-68.3,32.3,-84.9,42.7,-76.4Z" transform="translate(100 100)" className="animate-rotate-slow" />
        </svg>
      </div>
      
      <div className="container px-4 text-center relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="inline-block relative mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
              <span className="relative">
                <Sparkles className="absolute -top-8 -left-8 text-amber-200" size={24} />
                Reserve Agora Seu Evento
                <Sparkles className="absolute -bottom-8 -right-8 text-amber-200" size={24} />
              </span>
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mt-2"></div>
          </div>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Não perca a oportunidade de realizar seu evento em um espaço único e especial.
            Entre em contato conosco para verificar disponibilidade e realizar seu agendamento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agendamento">
              <Button className="group relative overflow-hidden bg-white text-amber-800 hover:bg-white hover:text-amber-900 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-transparent to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar size={20} className="transition-transform group-hover:rotate-12" />
                  Fazer Reserva
                </span>
              </Button>
            </Link>
            
            <a href="https://wa.me/559184731385" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-amber-800/40 backdrop-blur-sm px-8 py-6 text-lg rounded-xl">
                <span className="flex items-center gap-2">
                  <MessageSquare size={20} />
                  Fale Conosco
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
