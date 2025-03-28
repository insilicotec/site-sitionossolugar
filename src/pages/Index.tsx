import { 
  Cake, 
  Calendar, 
  Users, 
  Utensils, 
  Music, 
  Palmtree, 
  Waves, 
  Mountain,
  Heart,
  Leaf,
  Sun,
  Sparkles,
  Bird
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PhotoGallery from '@/components/PhotoGallery';
import VideoGallery from '@/components/VideoGallery';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, RefObject } from 'react';
import GoogleMap from '@/components/GoogleMap';

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

const useIntersectionObserver = (options = {}): [
  (element: HTMLElement | null) => void,
  IntersectionObserverEntry[]
] => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, options]);

  const ref = (element: HTMLElement | null) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  };

  return [ref, entries];
};

const FloatingLeaf = ({ delay = 0, size = 24, left = "10%", duration = 15 }) => {
  return (
    <div 
      className="absolute text-sitio-leaf opacity-70 animate-float pointer-events-none"
      style={{ 
        left, 
        top: `-${size}px`, 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <Leaf size={size} className="animate-leaf-sway" />
    </div>
  );
};

const Index = () => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  const [activeEntries, setActiveEntries] = useState<Element[]>([]);
  
  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveEntries(prev => [...prev, entry.target]);
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, [entries]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section h-[80vh] flex items-center justify-center text-white text-center relative">
          <FloatingLeaf delay={2} size={36} left="15%" duration={20} />
          <FloatingLeaf delay={5} size={28} left="85%" duration={18} />
          <FloatingLeaf delay={8} size={32} left="45%" duration={22} />
          
          <div className="absolute top-10 right-10 text-sitio-sunshine animate-pulse-soft opacity-70">
            <Sun size={64} />
          </div>
          
          <div className="container px-4">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative inline-block">
                Sítio Nosso Lugar
                <span className="absolute -top-6 -right-6 text-sitio-sunshine animate-pulse-soft">
                  <Sparkles size={32} />
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Um refúgio natural perfeito para seus momentos mais especiais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendamento">
                <Button className="bg-sitio-green-dark hover:bg-sitio-leaf text-white px-8 py-6 text-lg group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar size={20} className="transition-transform group-hover:rotate-12" />
                    Agendar Visita
                  </span>
                </Button>
              </Link>
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-white border-white hover:bg-white/20 px-8 py-6 text-lg">
                  <span className="flex items-center gap-2">
                    Conheça no Instagram
                  </span>
                </Button>
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
            <svg 
              preserveAspectRatio="none" 
              width="100%" 
              height="100" 
              viewBox="0 0 1200 120" 
              className="fill-sitio-sand"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"/>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"/>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"/>
            </svg>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-20 bg-sitio-sand relative">
          <div className="leaf-pattern absolute inset-0 opacity-20"></div>
          
          <div className="container px-4">
            <div className="text-center mb-12" ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
                Nossa História
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Um santuário natural cuidadosamente preservado, criado para proporcionar experiências inesquecíveis em harmonia com a natureza.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative" ref={ref}>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-sitio-leaf/30 rounded-xl z-0"></div>
                <div className="relative z-10 overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="Visão panorâmica do Sítio Nosso Lugar" 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -top-4 -left-4 p-4 bg-sitio-green-dark text-white rounded-lg shadow-nature">
                  <Bird size={24} className="animate-bounce-subtle" />
                </div>
              </div>
              
              <div className="space-y-6" ref={ref}>
                <div className="glass-card p-6 hover-lift">
                  <p className="text-gray-700 relative pl-6">
                    <span className="absolute left-0 top-0 text-sitio-leaf">
                      <Leaf size={20} className="leaf-icon" />
                    </span>
                    O Sítio Nosso Lugar nasceu do sonho de criar um refúgio onde as pessoas pudessem se reconectar com a natureza enquanto celebram momentos especiais.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <p className="text-gray-700 relative pl-6">
                    <span className="absolute left-0 top-0 text-sitio-leaf">
                      <Leaf size={20} className="leaf-icon" />
                    </span>
                    Preservamos a vegetação nativa e integramos nossa estrutura à paisagem natural, criando ambientes que respeitam e valorizam o meio ambiente.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <p className="text-gray-700 relative pl-6">
                    <span className="absolute left-0 top-0 text-sitio-leaf">
                      <Leaf size={20} className="leaf-icon" />
                    </span>
                    Cada detalhe do nosso espaço foi pensado para proporcionar conforto e uma experiência autêntica, onde seus convidados se sentirão acolhidos pela beleza da natureza.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link to="/como-chegar">
                    <Button className="group bg-sitio-leaf hover:bg-sitio-green-dark text-white">
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
        
        {/* Services Section */}
        <section className="py-20 bg-white relative">
          <div className="water-pattern absolute inset-0 opacity-30"></div>
          
          <div className="container px-4">
            <div className="text-center mb-12" ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
                Experiências Únicas
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Criamos experiências memoráveis para todos os momentos especiais da sua vida, com atendimento personalizado e serviços de qualidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Cake size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Aniversários</h3>
                <p className="text-gray-600">Celebre seu dia especial em um ambiente natural e acolhedor.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Heart size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Casamentos</h3>
                <p className="text-gray-600">O cenário perfeito para celebrar o amor em meio à natureza.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Utensils size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Buffet Completo</h3>
                <p className="text-gray-600">Deliciosa culinária local preparada com ingredientes frescos.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Users size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Espaço para Eventos</h3>
                <p className="text-gray-600">Amplo salão de festas com capacidade para diversos convidados.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Music size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">DJ e Som</h3>
                <p className="text-gray-600">Anime seu evento com música e iluminação profissional.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Palmtree size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Área de Lazer</h3>
                <p className="text-gray-600">Espaços recreativos para diversão de todas as idades.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Waves size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Piscina</h3>
                <p className="text-gray-600">Área de piscina para refrescantes momentos de lazer.</p>
              </div>
              
              <div className="nature-card p-6 text-center" ref={ref}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
                  <Mountain size={32} className="nature-breathe" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">Trilha Natural</h3>
                <p className="text-gray-600">Explore a natureza em nossas trilhas seguras e bem sinalizadas.</p>
              </div>
            </div>
            
            <div className="text-center mt-12" ref={ref}>
              <Link to="/agendamento">
                <Button className="bg-sitio-leaf hover:bg-sitio-green-dark text-white px-8 py-3 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar size={20} />
                    Agendar Sua Experiência
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-20 bg-sitio-sand relative">
          <div className="forest-pattern absolute inset-0 opacity-30"></div>
          
          <div className="container px-4">
            <div className="text-center mb-12" ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
                Galeria de Momentos
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Capture a essência do Sítio Nosso Lugar através das imagens que registram a beleza natural e os momentos especiais aqui vividos.
              </p>
            </div>
            
            <div ref={ref}>
              <PhotoGallery photos={photos} />
            </div>
          </div>
        </section>
        
        {/* Videos Section */}
        <section className="py-20 bg-white relative">
          <div className="water-pattern absolute inset-0 opacity-30"></div>
          
          <div className="container px-4">
            <div className="text-center mb-12" ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
                Experiência em Movimento
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Assista e sinta-se parte da natureza e tranquilidade do Sítio Nosso Lugar através dos nossos vídeos.
              </p>
            </div>
            
            <div ref={ref}>
              <VideoGallery videos={videos} />
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 bg-sitio-sand relative">
          <div className="leaf-pattern absolute inset-0 opacity-20"></div>
          
          <div className="container px-4">
            <div className="text-center mb-16" ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
                Como Chegar
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Estamos localizados em Vila Fátima, no Pará, em um local de fácil acesso rodeado pela beleza natural da região.
              </p>
            </div>
            
            <div ref={ref}>
              <GoogleMap />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-sitio-green-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200">
              <path 
                fill="#FFFFFF" 
                d="M42.7,-76.4C53.2,-67.8,58.5,-51.5,65.3,-37.2C72,-22.9,80.3,-10.7,81.2,2.2C82.2,15.1,76,30.9,66.2,42.6C56.4,54.3,43.1,62.1,29.2,69.7C15.3,77.4,0.8,85,-14.9,85.1C-30.5,85.2,-47.3,77.8,-58.8,65.9C-70.3,54,-76.6,37.5,-79.8,21C-83.1,4.4,-83.3,-12.3,-76.3,-24.9C-69.3,-37.6,-55,-46.2,-41.8,-53.9C-28.5,-61.5,-16.1,-68.2,0,-68.3C16.2,-68.3,32.3,-84.9,42.7,-76.4Z" 
                transform="translate(100 100)" 
                className="animate-rotate-slow"
              />
            </svg>
          </div>
          
          <div className="container px-4 text-center relative z-10">
            <div ref={ref}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Reserve Agora Seu Evento</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Não perca a oportunidade de realizar seu evento em um espaço único e especial.
                Entre em contato conosco para verificar disponibilidade e realizar seu agendamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button className="bg-white text-sitio-green-dark hover:bg-sitio-sand hover:text-sitio-green-forest px-8 py-3 text-lg group">
                    <span className="flex items-center gap-2">
                      <Calendar size={20} className="transition-transform group-hover:rotate-12" />
                      Fazer Reserva
                    </span>
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
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar." />
    </div>
  );
};

export default Index;
