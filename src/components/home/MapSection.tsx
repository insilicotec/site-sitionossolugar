
import GoogleMap from '@/components/GoogleMap';
import { MapPin, Navigation, Car, Clock, Route } from 'lucide-react';
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

        {/* Location Info Cards */}
        <div className="mb-16" ref={ref}>
          <div className="text-center mb-12">
            <span className="text-3xl mb-4 block">🗺️</span>
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Informações de Localização</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Todos os detalhes para sua chegada tranquila</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-200/50 text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-blue-100">
                <MapPin size={28} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Localização</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Vila Fátima, Tracuateua - PA</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl border border-green-200/50 text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-green-100">
                <Car size={28} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Acesso</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Estrada de fácil acesso para carros</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-2xl border border-amber-200/50 text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-amber-100">
                <Clock size={28} className="text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Horário</h4>
              <p className="text-gray-600 text-sm leading-relaxed">24h para hospedados</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-2xl border border-purple-200/50 text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-purple-100">
                <Navigation size={28} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">GPS</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Coordenadas disponíveis</p>
            </div>
          </div>
        </div>        
        {/* Google Map */}
        <div className="mb-10 relative" ref={ref}>
          <GoogleMap />
          {/* Botão do Waze sobreposto no mapa */}
          <div className="absolute top-4 right-4 z-10">
            <a 
              href="https://waze.com/ul?ll=-1.138923,-46.9632637&navigate=yes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 font-semibold"
            >
              <Route className="w-5 h-5" />
              Abrir no Waze
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center" ref={ref}>
          <Link to="/como-chegar">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 text-xl font-medium rounded-xl transition-colors">
              <Navigation className="mr-3" size={24} />
              Ver Detalhes da Rota
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
