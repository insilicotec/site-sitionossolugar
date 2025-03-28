
import React from 'react';
import { Bird, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StorySection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-amber-50 relative">
      <div className="leaf-pattern absolute inset-0 opacity-20"></div>
      
      <div className="container px-4">
        <div className="text-center mb-12" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
            Nossa História
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um santuário natural cuidadosamente preservado, criado para proporcionar experiências inesquecíveis em harmonia com a natureza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" ref={ref}>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-600/30 rounded-xl z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/494226ba-0fa4-44db-b762-3a3011b9997f.png" 
                alt="Piscina do Sítio Nosso Lugar com vista para a área de lazer" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 p-4 bg-amber-800 text-white rounded-lg shadow-lg">
              <Bird size={24} className="animate-bounce-subtle" />
            </div>
          </div>
          
          <div className="space-y-6" ref={ref}>
            <div className="glass-card p-6 hover-lift">
              <p className="text-gray-700 relative pl-6">
                <span className="absolute left-0 top-0 text-amber-600">
                  <Leaf size={20} className="leaf-icon" />
                </span>
                O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais.
              </p>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <p className="text-gray-700 relative pl-6">
                <span className="absolute left-0 top-0 text-amber-600">
                  <Leaf size={20} className="leaf-icon" />
                </span>
                Preservamos a vegetação nativa e integramos nossa estrutura à paisagem natural, criando ambientes que respeitam e valorizam o meio ambiente.
              </p>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <p className="text-gray-700 relative pl-6">
                <span className="absolute left-0 top-0 text-amber-600">
                  <Leaf size={20} className="leaf-icon" />
                </span>
                Cada detalhe do nosso espaço foi pensado para proporcionar conforto e uma experiência autêntica, onde seus convidados se sentirão acolhidos pela beleza da natureza.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/agendamento">
                <Button className="group bg-amber-700 hover:bg-amber-800 text-white">
                  <span className="flex items-center gap-2">
                    Conheça Nossa Estrutura
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
