
import { Bird, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StorySection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Um santuário natural cuidadosamente preservado, criado para proporcionar experiências inesquecíveis em harmonia com a natureza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image section */}
          <div className="relative order-2 lg:order-1" ref={ref}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-green-600/20 rounded-3xl opacity-75 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/494226ba-0fa4-44db-b762-3a3011b9997f.png" 
                  alt="Piscina do Sítio Nosso Lugar com vista para a área de lazer" 
                  className="w-full h-[500px] object-cover transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="space-y-8 order-1 lg:order-2" ref={ref}>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-2xl border border-green-200/50">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-green-500 rounded-xl flex-shrink-0">
                  <Leaf size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conexão com a Natureza</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-2xl border border-amber-200/50">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-amber-500 rounded-xl flex-shrink-0">
                  <Leaf size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Preservação Ambiental</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Preservamos a vegetação nativa e integramos nossa estrutura à paisagem natural, criando ambientes que respeitam e valorizam o meio ambiente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200/50">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-500 rounded-xl flex-shrink-0">
                  <Bird size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experiência Autêntica</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cada detalhe do nosso espaço foi pensado para proporcionar conforto e uma experiência autêntica, onde seus convidados se sentirão acolhidos pela beleza da natureza.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Link to="/agendamento">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 text-lg font-medium rounded-xl transition-colors">
                  Conheça Nossa História
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
