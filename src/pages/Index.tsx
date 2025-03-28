import { 
  Cake, 
  Calendar, 
  Users, 
  Utensils, 
  Music, 
  Palmtree, 
  Waves, 
  Mountain,
  Heart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PhotoGallery from '@/components/PhotoGallery';
import VideoGallery from '@/components/VideoGallery';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Vista natural do sítio"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Área de lazer"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Vista panorâmica"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Ambiente natural"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    alt: "Área verde"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    alt: "Espaço de eventos"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Salão de festas"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Área de piscina"
  }
];

const videos = [
  {
    id: 1,
    src: "/videos/sample-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Conheça o Sítio Nosso Lugar"
  },
  {
    id: 2,
    src: "/videos/sample-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Eventos no Sítio"
  },
  {
    id: 3,
    src: "/videos/sample-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    title: "Área de Lazer"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section h-[70vh] flex items-center justify-center text-white text-center">
          <div className="container px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sítio Nosso Lugar</h1>
            <p className="text-xl md:text-2xl mb-8">O espaço ideal para seus momentos especiais</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendamento">
                <Button className="bg-sitio-green-dark hover:bg-sitio-earth text-white px-8 py-6 text-lg">
                  Agendar Evento
                </Button>
              </Link>
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-white border-white hover:bg-white/20 px-8 py-6 text-lg">
                  Conheça no Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-sitio-sand">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sitio-earth mb-4">Sobre o Sítio Nosso Lugar</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Um local encantador cercado pela natureza, perfeito para celebrar momentos únicos. 
                Nosso espaço oferece tranquilidade e beleza para tornar seu evento verdadeiramente especial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Visão panorâmica do Sítio Nosso Lugar" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  O Sítio Nosso Lugar é um espaço privilegiado, combinando conforto e natureza para proporcionar 
                  experiências inesquecíveis. Contamos com uma ampla estrutura para atender diferentes tipos de eventos, 
                  desde casamentos e aniversários até encontros corporativos.
                </p>
                <p className="text-gray-700">
                  Nosso compromisso é oferecer um ambiente acolhedor, com excelente atendimento e serviços de qualidade, 
                  para que você e seus convidados aproveitem cada momento com tranquilidade e alegria.
                </p>
                <p className="text-gray-700">
                  Trabalhamos exclusivamente com sistema de agendamento, garantindo atenção personalizada para cada evento.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sitio-earth mb-4">Nossos Serviços</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Oferecemos uma variedade de serviços para tornar seu evento perfeito e memorável.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                title="Aniversários" 
                description="Celebre seu dia especial em um ambiente natural e acolhedor."
                icon={<Cake size={32} />}
              />
              <ServiceCard 
                title="Casamentos" 
                description="O cenário perfeito para celebrar o amor em meio à natureza."
                icon={<Heart size={32} />}
              />
              <ServiceCard 
                title="Buffet Completo" 
                description="Deliciosa culinária local preparada com ingredientes frescos."
                icon={<Utensils size={32} />}
              />
              <ServiceCard 
                title="Espaço para Eventos" 
                description="Amplo salão de festas com capacidade para diversos convidados."
                icon={<Users size={32} />}
              />
              <ServiceCard 
                title="DJ e Som" 
                description="Anime seu evento com música e iluminação profissional."
                icon={<Music size={32} />}
              />
              <ServiceCard 
                title="Área de Lazer" 
                description="Espaços recreativos para diversão de todas as idades."
                icon={<Palmtree size={32} />}
              />
              <ServiceCard 
                title="Piscina" 
                description="Área de piscina para refrescantes momentos de lazer."
                icon={<Waves size={32} />}
              />
              <ServiceCard 
                title="Trilha Natural" 
                description="Explore a natureza em nossas trilhas seguras e bem sinalizadas."
                icon={<Mountain size={32} />}
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/agendamento">
                <Button className="bg-sitio-green-dark hover:bg-sitio-earth text-white px-8 py-3">
                  Agendar Agora
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-sitio-sand">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sitio-earth mb-4">Galeria</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Conheça nosso espaço através de imagens que capturam a beleza e tranquilidade do Sítio Nosso Lugar.
              </p>
            </div>
            
            <PhotoGallery photos={photos} />
          </div>
        </section>
        
        {/* Videos Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sitio-earth mb-4">Vídeos</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Assista e sinta a experiência de estar no Sítio Nosso Lugar.
              </p>
            </div>
            
            <VideoGallery videos={videos} />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-sitio-green-dark text-white">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Reserve Agora Seu Evento</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de realizar seu evento em um espaço único e especial.
              Entre em contato conosco para verificar disponibilidade e realizar seu agendamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendamento">
                <Button className="bg-white text-sitio-green-dark hover:bg-gray-100 px-8 py-3 text-lg">
                  Fazer Reserva
                </Button>
              </Link>
              <a 
                href="https://wa.me/559184731385" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar." />
    </div>
  );
};

export default Index;
