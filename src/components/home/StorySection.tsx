
import { Bird, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StorySection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um santuário natural cuidadosamente preservado, criado para proporcionar experiências inesquecíveis em harmonia com a natureza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative" ref={ref}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/lovable-uploads/494226ba-0fa4-44db-b762-3a3011b9997f.png" 
                alt="Piscina do Sítio Nosso Lugar com vista para a área de lazer" 
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="space-y-8" ref={ref}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                  <Leaf size={20} className="text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                  <Leaf size={20} className="text-amber-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Preservamos a vegetação nativa e integramos nossa estrutura à paisagem natural, criando ambientes que respeitam e valorizam o meio ambiente.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Bird size={20} className="text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Cada detalhe do nosso espaço foi pensado para proporcionar conforto e uma experiência autêntica, onde seus convidados se sentirão acolhidos pela beleza da natureza.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/agendamento">
                <Button className="group bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105">
                  <span className="flex items-center gap-2">
                    Conheça Nossa História
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
