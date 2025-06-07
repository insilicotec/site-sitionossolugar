import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Video } from 'lucide-react';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black animate-slide-up">Como Chegar</h1>
            <p className="text-xl max-w-3xl mx-auto text-black animate-slide-up" style={{animationDelay: '0.2s'}}>
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
                <GoogleMap />
                
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
                          Ramal do Piquiá
                        </p>
                        <p className="text-gray-700 mb-4">
                          Tracuateua - PA, CEP 68647-000
                        </p>
                        <div className="flex gap-3">
                          <a 
                            href="https://www.google.com/maps/place/Ramal+do+Piqui%C3%A1,+Tracuateua+-+PA,+68647-000/@-1.1414,-46.9619,17z/data=!4m6!3m5!1s0x92af183a59423115:0xeb1cb758244c3e1!8m2!3d-1.1310506!4d-46.9679359!16s%2Fg%2F11vpgvkpxf?hl=pt-BR&entry=ttu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm bg-sitio-green-dark text-white px-3 py-1 rounded-full hover:bg-sitio-earth transition-colors"
                          >
                            Abrir no Google Maps
                          </a>
                          <a 
                            href="https://waze.com/ul?ll=-1.1414,-46.9619&navigate=yes" 
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
                          <li>Acesse o Ramal do Piquiá em Tracuateua</li>
                          <li>Siga as placas para "Sítio Nosso Lugar"</li>
                          <li>A entrada principal está sinalizada</li>
                          <li>Em caso de dúvidas, utilize o botão de WhatsApp para orientações</li>
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
      <WhatsappButton phone="559184731385" message="🗺️ *AJUDA PARA CHEGAR* 🚗

Olá! Preciso de ajuda para chegar ao Sítio Nosso Lugar.

📍 Poderiam me enviar as coordenadas ou indicações mais detalhadas de como chegar?

🙏 Obrigado!" />
    </div>
  );
};

export default ComoChegar;
