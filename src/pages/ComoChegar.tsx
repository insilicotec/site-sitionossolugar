
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

const ComoChegar = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;
    
    // Inicializar mapa
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 14,
      center: [-48.476, -1.459], // Coordenadas exemplo para Belém
    });

    // Adicionar controles de navegação
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Adicionar marcador
    new mapboxgl.Marker({ color: '#1F6E5B' })
      .setLngLat([-48.476, -1.459])
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTokenInput(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-sitio-sand/20">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-sitio-green-dark opacity-80 z-0"></div>
          <div 
            className="absolute inset-0 z-0 opacity-30" 
            style={{
              backgroundImage: 'url("/images/hero-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
            }}
          ></div>
          <div className="container px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-slide-up">Como Chegar</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Encontre o caminho para o Sítio Nosso Lugar e aproveite momentos inesquecíveis na natureza.
            </p>
          </div>
        </section>
        
        {/* Mapa Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gradient mb-4">Nossa Localização</h2>
                <p className="text-lg text-gray-600 mb-6">Sítio Nosso Lugar está localizado em um local privilegiado, com fácil acesso e cercado pela natureza.</p>
                <div className="h-1 w-20 bg-sitio-green-dark mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <Card className="shadow-xl overflow-hidden border-none bg-gradient-to-br from-white to-sitio-sand/20 p-1 animate-float">
                  <CardContent className="p-0 relative h-[400px]">
                    {showTokenInput ? (
                      <div className="flex flex-col items-center justify-center h-full p-6 bg-sitio-sand/10">
                        <MapPin size={48} className="text-sitio-green-dark mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Mapa Interativo</h3>
                        <p className="text-gray-600 mb-6 text-center">
                          Para visualizar o mapa, insira seu token público do Mapbox.
                          <br />
                          <span className="text-sm">
                            (Obtenha seu token em <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-sitio-green-dark hover:underline">mapbox.com</a>)
                          </span>
                        </p>
                        <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              placeholder="Token público do Mapbox"
                              value={mapboxToken}
                              onChange={(e) => setMapboxToken(e.target.value)}
                              className="flex-1 px-4 py-2 border border-sitio-green-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-sitio-green-dark"
                            />
                            <button 
                              type="submit"
                              className="bg-sitio-green-dark text-white px-4 py-2 rounded-md hover:bg-sitio-green-dark/90 transition-colors"
                            >
                              Aplicar
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div ref={mapContainer} className="h-full" />
                    )}
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="shadow-lg overflow-hidden border-none bg-gradient-to-br from-white to-sitio-green-light/10 animate-pulse-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-sitio-green-dark rounded-full mr-4">
                          <Navigation className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-sitio-earth">Endereço</h3>
                      </div>
                      <div className="pl-12">
                        <p className="text-gray-700 mb-2">
                          Rod. Bernardo Sayão, Km 5, Estrada do Outeiro
                        </p>
                        <p className="text-gray-700 mb-4">
                          Belém - PA, CEP 66000-000
                        </p>
                        <div className="flex gap-3">
                          <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=-1.459,-48.476" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm bg-sitio-green-dark text-white px-3 py-1 rounded-full hover:bg-sitio-earth transition-colors"
                          >
                            Abrir no Google Maps
                          </a>
                          <a 
                            href="https://waze.com/ul?ll=-1.459,-48.476&navigate=yes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm bg-sitio-accent text-white px-3 py-1 rounded-full hover:bg-sitio-accent/80 transition-colors"
                          >
                            Abrir no Waze
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-lg overflow-hidden border-none bg-gradient-to-br from-white to-sitio-sand/30 animate-pulse-soft" style={{animationDelay: '1s'}}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-sitio-green-dark rounded-full mr-4">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-sitio-earth">Como Chegar</h3>
                      </div>
                      <div className="pl-12">
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Siga a Rod. Bernardo Sayão sentido Outeiro</li>
                          <li>No Km 5, procure a placa "Sítio Nosso Lugar" no lado direito</li>
                          <li>Entre na estrada de terra e siga por 800m</li>
                          <li>O portão principal estará à sua direita</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vídeo Section */}
        <section className="py-16 bg-sitio-sand/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gradient mb-4">Veja Como Chegar</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Assista ao vídeo para facilitar sua chegada ao Sítio Nosso Lugar.
                </p>
                <div className="h-1 w-20 bg-sitio-green-dark mx-auto"></div>
              </div>
              
              <Card className="shadow-xl overflow-hidden border-none bg-gradient-to-br from-white to-sitio-green-light/10 animate-float" style={{animationDelay: '0.5s'}}>
                <CardContent className="p-0">
                  <div className="relative pt-[56.25%]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video size={48} className="text-sitio-green-dark" />
                      <p className="mt-4 text-center text-gray-600">
                        Vídeo demonstrativo - Em breve disponível
                      </p>
                    </div>
                    {/* Uma vez que o vídeo estiver disponível, descomente este código:
                    <iframe 
                      src="https://www.youtube.com/embed/VIDEO_ID" 
                      className="absolute inset-0 w-full h-full"
                      title="Como chegar ao Sítio Nosso Lugar"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Preciso de ajuda para chegar ao Sítio Nosso Lugar." />
    </div>
  );
};

export default ComoChegar;
