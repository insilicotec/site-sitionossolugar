
import React from 'react';
import { Calendar, Heart, Utensils, Users, Palmtree, Waves, Mountain, Coffee, Hotel, Trophy, Gamepad } from 'lucide-react';
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
          
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
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
          
          <ExperienceCard icon={<Trophy size={32} />} title="Área de Esportes" description="Espaços para prática de esportes e atividades físicas." refProp={ref} />
          
          <ExperienceCard icon={<Gamepad size={32} />} title="Área de Jogos" description="Diversão garantida com jogos de mesa e entretenimento." refProp={ref} />
          
          <ExperienceCard icon={<Coffee size={32} />} title="Café da Manhã" description="Delicioso café da manhã com opções variadas." refProp={ref} />
          
          <ExperienceCard icon={<Coffee size={32} />} title="Café da Tarde" description="Momento especial com lanches e bebidas da tarde." refProp={ref} />
          
          <ExperienceCard icon={<Hotel size={32} />} title="17 Suítes" description="Acomodações confortáveis para hospedagem completa." refProp={ref} />
          
          <ExperienceCard icon={<Palmtree size={32} />} title="Área de Lazer" description="Espaços recreativos para diversão de todas as idades." refProp={ref} />
          
          <ExperienceCard icon={<Waves size={32} />} title="Piscina" description="Área de piscina para refrescantes momentos de lazer." refProp={ref} />
          
          <ExperienceCard icon={<Mountain size={32} />} title="Trilha Natural" description="Explore a natureza em nossas trilhas seguras e bem sinalizadas." refProp={ref} />
        </div>
        
        <div className="text-center mt-12" ref={ref}>
          <Link to="/agendamento">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 group relative overflow-hidden">
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
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-amber-600/20 rounded-full mb-4 text-amber-800">
        <div className="nature-breathe">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-amber-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceSection;
