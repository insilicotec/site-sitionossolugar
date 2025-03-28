import React, { useEffect, useState, useRef } from 'react';
import { Cake, Calendar, Users, Utensils, Music, Palmtree, Waves, Mountain, Heart, Leaf, Sun, Sparkles, Bird, CalendarClock, Instagram, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PhotoGallery from '@/components/PhotoGallery';
import VideoGallery from '@/components/VideoGallery';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GoogleMap from '@/components/GoogleMap';
const photos = [{
  id: 1,
  src: "/lovable-uploads/57f7a25d-1204-4c33-9a72-f8f9cd835e02.png",
  alt: "Evento organizado com mesas e cadeiras douradas em ambiente natural"
}, {
  id: 2,
  src: "/lovable-uploads/a6c3f3e5-afad-4cdd-ba30-4af367d78ade.png",
  alt: "Área de lazer noturna com mesas e iluminação especial"
}, {
  id: 3,
  src: "/lovable-uploads/1ceb5176-485a-4c1d-b418-3449ff8518ac.png",
  alt: "Família em momento especial com roupões brancos"
}, {
  id: 4,
  src: "/lovable-uploads/3b453679-06d7-4e57-89b2-e348b049a975.png",
  alt: "Quarto com camas em tons rosados"
}, {
  id: 5,
  src: "/lovable-uploads/d51eb3b7-e8ca-4c8c-9561-d4447900704c.png",
  alt: "Corredor para cerimônia com cadeiras e decoração floral"
}, {
  id: 6,
  src: "/lovable-uploads/2048c0e9-be7a-4fa6-abea-eb2c0dcf4e1b.png",
  alt: "Área de descanso com pergolados e cortinas brancas"
}, {
  id: 7,
  src: "/lovable-uploads/5bddaa83-3589-4afd-ac73-eb5317e1bc34.png",
  alt: "Área verde com caminho de madeira e palmeiras"
}, {
  id: 8,
  src: "/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png",
  alt: "Salão de festas com mesas douradas decoradas para evento"
}, {
  id: 9,
  src: "/lovable-uploads/4a1d4b9c-1ea8-418a-8a24-ab78a8f64d53.png",
  alt: "Piscina com mãe e filha brincando com bola vermelha"
}];
const videos = [{
  id: 1,
  src: "/videos/sample-video.mp4",
  thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  title: "Conheça o Sítio Nosso Lugar"
}, {
  id: 2,
  src: "/videos/sample-video.mp4",
  thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  title: "Eventos no Sítio"
}, {
  id: 3,
  src: "/videos/sample-video.mp4",
  thumbnail: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
  title: "Área de Lazer"
}];
const useIntersectionObserver = (options = {}): [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(observedEntries => {
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
const FloatingLeaf = ({
  delay = 0,
  size = 24,
  left = "10%",
  duration = 15
}) => {
  return <div className="absolute text-sitio-leaf opacity-70 animate-float pointer-events-none" style={{
    left,
    top: `-${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }}>
      <Leaf size={size} className="animate-leaf-sway" />
    </div>;
};
const Index = () => {
  const [ref, entries] = useIntersectionObserver({
    threshold: 0.1
  });
  const [activeEntries, setActiveEntries] = useState<Element[]>([]);
  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveEntries(prev => [...prev, entry.target]);
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, [entries]);
  return <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative pt-28 md:pt-32 min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-emerald-50/60"></div>
          </div>
          
          <div className="absolute top-20 right-20 text-emerald-300/40">
            <Leaf size={180} />
          </div>
          <div className="absolute bottom-20 left-20 text-emerald-300/30">
            <Leaf size={140} className="rotate-45" />
          </div>
          
          <div className="container relative z-10 px-6 py-16 mx-auto text-center bg-slate-50">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-700 uppercase bg-emerald-100 rounded-full">
                Bem-vindo ao nosso paraíso natural
              </span>
              
              <h1 className="mb-8 text-5xl font-bold leading-tight text-emerald-900 md:text-6xl lg:text-7xl font-display">
                Sítio Nosso Lugar
              </h1>
              
              <p className="max-w-2xl mx-auto mb-10 text-lg text-emerald-800/90 md:text-xl">
                Um refúgio natural perfeito para seus momentos mais especiais, onde a natureza e o conforto se encontram para criar experiências inesquecíveis.
              </p>
              
              <a href="https://www.instagram.com/sitionossolugar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white transition-all duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-lg hover:scale-105">
                <Instagram size={20} className="animate-pulse" />
                Conheça no Instagram
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
            <svg preserveAspectRatio="none" width="100%" height="80" viewBox="0 0 1200 120" className="fill-sitio-sand">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
            </svg>
          </div>
        </section>
        
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
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Visão panorâmica do Sítio Nosso Lugar" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
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
                  <Link to="/agendamento">
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
        
        <section className="py-20 bg-white relative">
          <div className="water-pattern absolute inset-0 opacity-30"></div>
          
          <div className="container px-4">
            <div className="text-center mb-12" ref={ref}>
              <div className="mb-6">
                
              </div>
              
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
        
        <section className="py-20 bg-sitio-sand relative">
          <div className="leaf-pattern absolute inset-0 opacity-20"></div>
          
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
        
        <section className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute top-10 left-10 text-white/20 animate-pulse">
            <Sparkles size={40} />
          </div>
          <div className="absolute bottom-10 right-10 text-white/20 animate-pulse" style={{
          animationDelay: "1s"
        }}>
            <Sparkles size={30} />
          </div>
          <div className="absolute top-1/2 right-1/4 text-white/10 animate-pulse" style={{
          animationDelay: "1.5s"
        }}>
            <Sparkles size={50} />
          </div>
          
          <div className="absolute -top-20 -right-20 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200">
              <path fill="#FFFFFF" d="M42.7,-76.4C53.2,-67.8,58.5,-51.5,65.3,-37.2C72,-22.9,80.3,-10.7,81.2,2.2C82.2,15.1,76,30.9,66.2,42.6C56.4,54.3,43.1,62.1,29.2,69.7C15.3,77.4,0.8,85,-14.9,85.1C-30.5,85.2,-47.3,77.8,-58.8,65.9C-70.3,54,-76.6,37.5,-79.8,21C-83.1,4.4,-83.3,-12.3,-76.3,-24.9C-69.3,-37.6,-55,-46.2,-41.8,-53.9C-28.5,-61.5,-16.1,-68.2,0,-68.3C16.2,-68.3,32.3,-84.9,42.7,-76.4Z" transform="translate(100 100)" className="animate-rotate-slow" />
            </svg>
          </div>
          
          <div className="container px-4 text-center relative z-10">
            <div ref={ref} className="max-w-4xl mx-auto">
              <div className="inline-block relative mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white">
                  <span className="relative">
                    <Sparkles className="absolute -top-8 -left-8 text-yellow-200" size={24} />
                    Reserve Agora Seu Evento
                    <Sparkles className="absolute -bottom-8 -right-8 text-yellow-200" size={24} />
                  </span>
                </h2>
                <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-200 to-transparent mx-auto mt-2"></div>
              </div>
              
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Não perca a oportunidade de realizar seu evento em um espaço único e especial.
                Entre em contato conosco para verificar disponibilidade e realizar seu agendamento.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button className="group relative overflow-hidden bg-white text-emerald-700 hover:bg-white hover:text-emerald-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-transparent to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <Calendar size={20} className="transition-transform group-hover:rotate-12" />
                      Fazer Reserva
                    </span>
                  </Button>
                </Link>
                
                <a href="https://wa.me/559184731385" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-emerald-600/40 backdrop-blur-sm px-8 py-6 text-lg rounded-xl">
                    <span className="flex items-center gap-2">
                      <MessageSquare size={20} />
                      Fale Conosco
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar." />
    </div>;
};
export default Index;