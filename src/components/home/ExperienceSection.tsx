import React from 'react';
import { Calendar, Heart, Utensils, Users, Music, Palmtree, Waves, Mountain } from 'lucide-react';
import Cake from './Cake'; // Import our custom Cake component
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExperienceSection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-white relative">
      <div className="water-pattern absolute inset-0 opacity-30"></div>
      
      <div className="container px-4">
        <div className="text-center mb-12" ref={ref}>
          <div className="mb-6"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-sitio-green-forest mb-6 decorated">
            Experiências Únicas
          </h2>
        
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Criamos experiências memoráveis para todos os momentos especiais da sua vida, com atendimento personalizado e serviços de qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ExperienceCard icon={<Heart size={32} />} title="Casamentos" description="O cenário perfeito para celebrar o amor em meio à natureza." refProp={ref} />
          
          <ExperienceCard icon={<Cake size={32} />} title="Aniversários" description="Celebre seu dia especial em um ambiente natural e acolhedor." refProp={ref} />
          
          <ExperienceCard icon={<Utensils size={32} />} title="Buffet Completo" description="Deliciosa culinária local preparada com ingredientes frescos." refProp={ref} />
          
          <ExperienceCard icon={<Users size={32} />} title="Espaço para Eventos" description="Amplo salão de festas com capacidade para diversos convidados." refProp={ref} />
          
          <ExperienceCard icon={<Music size={32} />} title="DJ e Som" description="Anime seu evento com música e iluminação profissional." refProp={ref} />
          
          <ExperienceCard icon={<Palmtree size={32} />} title="Área de Lazer" description="Espaços recreativos para diversão de todas as idades." refProp={ref} />
          
          <ExperienceCard icon={<Waves size={32} />} title="Piscina" description="Área de piscina para refrescantes momentos de lazer." refProp={ref} />
          
          <ExperienceCard icon={<Mountain size={32} />} title="Trilha Natural" description="Explore a natureza em nossas trilhas seguras e bem sinalizadas." refProp={ref} />
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
  );
};

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  refProp: (element: HTMLElement | null) => void;
}

const ExperienceCard = ({ icon, title, description, refProp }: ExperienceCardProps) => {
  return (
    <div className="nature-card p-6 text-center" ref={refProp}>
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light/20 rounded-full mb-4 text-sitio-green-dark">
        <div className="nature-breathe">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-sitio-green-forest">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceSection;
