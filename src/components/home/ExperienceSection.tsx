
import { Calendar, Heart, Utensils, Users, Palmtree, Waves, Mountain, Coffee, Hotel, Trophy, Gamepad } from 'lucide-react';
import { useState } from 'react';
import Cake from './Cake';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type TabType = 'eventos' | 'hospedagem' | 'lazer';

const ExperienceSection = ({ useIntersectionObserver }: { useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]] }) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<TabType>('eventos');

  const tabs = [
    { id: 'eventos' as TabType, label: 'Eventos Especiais', emoji: '🎉' },
    { id: 'hospedagem' as TabType, label: 'Hospedagem & Alimentação', emoji: '🏨' },
    { id: 'lazer' as TabType, label: 'Lazer & Natureza', emoji: '🌿' }
  ];

  const experienceData = {
    eventos: {
      title: "Eventos Especiais",
      subtitle: "Momentos únicos merecem cenários únicos",
      emoji: "🎉",
      cards: [
        {
          icon: <Heart size={32} />,
          title: "Casamentos",
          description: "O cenário perfeito para celebrar o amor em meio à natureza.",
          color: "rose"
        },
        {
          icon: <Cake size={32} />,
          title: "Aniversários",
          description: "Celebre seu dia especial em um ambiente natural e acolhedor.",
          color: "purple"
        },
        {
          icon: <Users size={32} />,
          title: "Espaço para Eventos",
          description: "Amplo salão de festas com capacidade para diversos convidados.",
          color: "blue"
        },
        {
          icon: <Utensils size={32} />,
          title: "Buffet Completo",
          description: "Deliciosa culinária local preparada com ingredientes frescos.",
          color: "amber"
        }
      ]
    },
    hospedagem: {
      title: "Hospedagem & Alimentação",
      subtitle: "Conforto e sabor em perfeita harmonia",
      emoji: "🏨",
      cards: [
        {
          icon: <Hotel size={32} />,
          title: "17 Suítes",
          description: "Acomodações confortáveis para hospedagem completa.",
          color: "indigo"
        },
        {
          icon: <Coffee size={32} />,
          title: "Café da Manhã",
          description: "Delicioso café da manhã com opções variadas.",
          color: "orange"
        },
        {
          icon: <Coffee size={32} />,
          title: "Café da Tarde",
          description: "Momento especial com lanches e bebidas da tarde.",
          color: "yellow"
        }
      ]
    },
    lazer: {
      title: "Lazer & Natureza",
      subtitle: "Diversão e relaxamento em meio à natureza",
      emoji: "🌿",
      cards: [
        {
          icon: <Waves size={32} />,
          title: "Piscina",
          description: "Área de piscina para refrescantes momentos de lazer.",
          color: "cyan"
        },
        {
          icon: <Palmtree size={32} />,
          title: "Área de Lazer",
          description: "Espaços recreativos para diversão de todas as idades.",
          color: "green"
        },
        {
          icon: <Trophy size={32} />,
          title: "Área de Esportes",
          description: "Espaços para prática de esportes e atividades físicas.",
          color: "emerald"
        },
        {
          icon: <Gamepad size={32} />,
          title: "Área de Jogos",
          description: "Diversão garantida com jogos de mesa e entretenimento.",
          color: "violet"
        },
        {
          icon: <Mountain size={32} />,
          title: "Trilha Natural",
          description: "Explore a natureza em nossas trilhas seguras e bem sinalizadas.",
          color: "teal"
        }
      ]
    }
  };

  const currentExperience = experienceData[activeTab];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100/50 relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Experiências Únicas
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Criamos experiências memoráveis para todos os momentos especiais da sua vida, com atendimento personalizado e serviços de qualidade.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
              }`}
            >
              <span className="text-xl">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Content Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-3xl mb-4 block">{currentExperience.emoji}</span>
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">{currentExperience.title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{currentExperience.subtitle}</p>
          </div>
          
          <div className={`grid gap-8 ${
            activeTab === 'eventos' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : activeTab === 'hospedagem'
              ? 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
          }`}>
            {currentExperience.cards.map((card, index) => (
              <ExperienceCard 
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={card.color}
                refProp={ref}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center" ref={ref}>
          <Link to="/agendamento">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 text-xl font-medium rounded-xl transition-colors">
              <Calendar className="mr-3" size={24} />
              Descubra Mais
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
  color: string;
  refProp: (element: HTMLElement | null) => void;
}

const ExperienceCard = ({ icon, title, description, color, refProp }: ExperienceCardProps) => {
  // Color mapping for different themes
  const colorClasses = {
    rose: "bg-rose-50 border-rose-200/50 text-rose-600",
    purple: "bg-purple-50 border-purple-200/50 text-purple-600",
    blue: "bg-blue-50 border-blue-200/50 text-blue-600",
    amber: "bg-amber-50 border-amber-200/50 text-amber-600",
    indigo: "bg-indigo-50 border-indigo-200/50 text-indigo-600",
    orange: "bg-orange-50 border-orange-200/50 text-orange-600",
    yellow: "bg-yellow-50 border-yellow-200/50 text-yellow-600",
    cyan: "bg-cyan-50 border-cyan-200/50 text-cyan-600",
    green: "bg-green-50 border-green-200/50 text-green-600",
    emerald: "bg-emerald-50 border-emerald-200/50 text-emerald-600",
    violet: "bg-violet-50 border-violet-200/50 text-violet-600",
    teal: "bg-teal-50 border-teal-200/50 text-teal-600",
  };

  const iconBgClasses = {
    rose: "bg-rose-100",
    purple: "bg-purple-100",
    blue: "bg-blue-100",
    amber: "bg-amber-100",
    indigo: "bg-indigo-100",
    orange: "bg-orange-100",
    yellow: "bg-yellow-100",
    cyan: "bg-cyan-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    violet: "bg-violet-100",
    teal: "bg-teal-100",
  };

  return (
    <div 
      className={`bg-white p-8 rounded-2xl border text-center transition-all duration-300 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.amber}`} 
      ref={refProp}
    >
      <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 ${iconBgClasses[color as keyof typeof iconBgClasses] || iconBgClasses.amber}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperienceSection;
