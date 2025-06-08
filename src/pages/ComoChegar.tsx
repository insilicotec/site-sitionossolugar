import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Info,
  Route,
  ParkingCircle,
  AlertTriangle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import GoogleMap from '@/components/GoogleMap';

const ComoChegar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-sitio-sand/20">
      <Navbar />
        <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-sitio-green-dark opacity-90 z-0"></div>
          <div 
            className="absolute inset-0 z-0 opacity-30" 
            style={{
              backgroundImage: 'url("/images/hero-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          ></div>
          <div className="container px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-slide-up">
                Como Chegar ao Sítio
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 animate-slide-up mb-6" style={{animationDelay: '0.2s'}}>
                Encontre o caminho mais fácil para chegar até nós e desfrute de momentos únicos na natureza
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30-40 min de Belém</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                  <ParkingCircle className="w-4 h-4" />
                  <span>Estacionamento gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </section>        
        {/* Mapa e Informações Principais */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Localizado em Vila Fátima, oferecemos fácil acesso e amplo estacionamento
                </p>
                <div className="h-1 w-20 bg-sitio-green-dark mx-auto"></div>
              </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
                {/* Mapa */}
                <div className="xl:col-span-2 relative">
                  <GoogleMap />                  {/* Botão do Waze sobreposto no mapa */}
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
                
                {/* Informações de Contato e Endereço */}
                <div className="space-y-6">
                  <Card className="shadow-lg border-0 bg-gradient-to-br from-sitio-green-dark to-sitio-green-dark/90 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-white/20 rounded-full mr-4">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Endereço</h3>
                      </div>
                      <div className="space-y-3">
                        <p className="text-white/90">
                          Ramal do Piquiá<br />
                          Tracuateua - PA<br />
                          CEP 68647-000
                        </p>
                        <div className="flex flex-col gap-2">                          <a 
                            href="https://www.google.com/maps/place/Sitio+Nosso+Lugar/@-1.1395237,-46.9644975,17z/data=!4m6!3m5!1s0x92af19c9f0d36633:0x4df4b7afb66ebf9a!8m2!3d-1.138923!4d-46.9632637!16s%2Fg%2F11g8whxq5j?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2 justify-center"
                          >
                            <Navigation className="w-4 h-4" />
                            Google Maps
                          </a>
                          <a 
                            href="https://waze.com/ul?ll=-1.138923,-46.9632637&navigate=yes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2 justify-center"
                          >
                            <Route className="w-4 h-4" />
                            Waze
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-sitio-green-dark rounded-full mr-4">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Contato</h3>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          Dúvidas sobre como chegar?<br />
                          Entre em contato conosco!
                        </p>
                        <a 
                          href="https://wa.me/559184731385"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 justify-center"
                        >
                          <Phone className="w-4 h-4" />
                          WhatsApp: (91) 8473-1385
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info Cards - Transferred from Homepage */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-gray-50/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-3xl mb-4 block">🗺️</span>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Informações de Localização</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Todos os detalhes para sua chegada tranquila</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-200/50 text-center">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-blue-100">
                    <MapPin size={28} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Localização</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Vila Fátima, Tracuateua - PA</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl border border-green-200/50 text-center">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-green-100">
                    <Route size={28} className="text-green-600" />
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
          </div>
        </section>
        
        {/* Informações Importantes */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Informações Importantes</h2>
                <p className="text-lg text-gray-600">
                  Tudo que você precisa saber antes de viajar
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-lg border-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600 text-sm">
                      Todos os dias<br />
                      08:00 às 18:00
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ParkingCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Estacionamento</h3>
                    <p className="text-gray-600 text-sm">
                      Gratuito e amplo<br />
                      Para carros e ônibus
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Info className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Dica Importante</h3>
                    <p className="text-gray-600 text-sm">
                      GPS pode não funcionar<br />
                      perfeitamente no ramal
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Aviso sobre condições da estrada */}
              <Card className="mt-8 shadow-lg border-l-4 border-l-amber-500 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">Condições da Estrada</h3>
                      <p className="text-amber-700 mb-3">
                        O acesso ao sítio é feito por estrada de terra. Recomendamos dirigir com cuidado, 
                        especialmente em dias de chuva.
                      </p>
                      <p className="text-amber-700 text-sm">
                        💡 <strong>Dica:</strong> Em caso de dúvidas sobre as condições da estrada ou 
                        dificuldades para encontrar o local, entre em contato conosco pelo WhatsApp.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
        <Footer />
      <WhatsappButton />
    </div>
  );
};

export default ComoChegar;
