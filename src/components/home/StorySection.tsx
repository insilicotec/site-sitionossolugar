

import { Bird, Leaf } from 'lucide-react';
import { useEffect, useRef } from 'react';

const StorySection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  const [videoContainerRef, videoEntries] = useIntersectionObserver({ threshold: 0.1 });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current || videoEntries.length === 0) return;
    
    const isVisible = videoEntries[0].isIntersecting;
    
    if (isVisible) {
      videoRef.current.play().catch((error) => {
        console.log('Erro ao reproduzir vídeo:', error);
      });
    } else {
      videoRef.current.pause();
    }
  }, [videoEntries]);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" ref={ref}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 md:mb-6 leading-tight px-2">
            Nossa História
          </h2>
          <div className="w-20 md:w-24 h-1 bg-amber-600 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Um santuário natural cuidadosamente preservado, criado para proporcionar experiências inesquecíveis em harmonia com a natureza.
          </p>
        </div>          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image section */}
          <div className="relative order-2 lg:order-1" ref={videoContainerRef}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-green-600/20 rounded-3xl opacity-75 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  ref={videoRef}
                  src="/video-optimized.mp4"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500"
                  playsInline
                  muted
                  loop
                  preload="auto"
                  onLoadStart={() => console.log('Vídeo começou a carregar')}
                  onCanPlay={() => console.log('Vídeo pode ser reproduzido')}
                  onError={(e) => console.error('Erro no vídeo:', e)}
                  onLoadedData={() => console.log('Dados do vídeo carregados')}
                  autoPlay
                >
                  Seu navegador não suporta o vídeo.
                </video>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="order-1 lg:order-2" ref={ref}>
            {/* Desktop layout: vertical stack */}
            <div className="hidden lg:flex lg:flex-col lg:space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-2xl border border-green-200/50">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-green-500 rounded-xl flex-shrink-0">
                    <Leaf size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Conexão com a Natureza</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais. Com mais de 10 anos de experiência, construímos uma reputação sólida oferecendo momentos únicos em meio à natureza.
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
                  </div>                </div>
              </div>
            </div>

            {/* Mobile layout: horizontal scroll */}
            <div className="lg:hidden">
              {/* Horizontal scrolling container */}
              <div className="overflow-x-auto pb-4 mb-8">
                <div className="flex gap-6 w-max">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl border border-green-200/50 w-80 flex-shrink-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-500 rounded-xl flex-shrink-0">
                        <Leaf size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Conexão com a Natureza</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais. Com mais de 10 anos de experiência, construímos uma reputação sólida oferecendo momentos únicos em meio à natureza.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-2xl border border-amber-200/50 w-80 flex-shrink-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-500 rounded-xl flex-shrink-0">
                        <Leaf size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Preservação Ambiental</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Preservamos a vegetação nativa e integramos nossa estrutura à paisagem natural, criando ambientes que respeitam e valorizam o meio ambiente.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-200/50 w-80 flex-shrink-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500 rounded-xl flex-shrink-0">
                        <Bird size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiência Autêntica</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Cada detalhe do nosso espaço foi pensado para proporcionar conforto e uma experiência autêntica, onde seus convidados se sentirão acolhidos pela beleza da natureza.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
