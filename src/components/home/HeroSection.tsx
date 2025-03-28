
import React from 'react';
import { Leaf, Instagram, Calendar, Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return <section className="relative pt-28 md:pt-32 min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-amber-100/60"></div>
      </div>
      
      <div className="absolute top-20 right-20 text-amber-700/30">
        <Leaf size={180} />
      </div>
      <div className="absolute bottom-20 left-20 text-amber-700/20">
        <Leaf size={140} className="rotate-45" />
      </div>
      
      <div className="container relative z-10 px-6 py-16 mx-auto text-center">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-xl shadow-md">
          <img src="/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png" alt="Sítio Nosso Lugar Logo" className="h-32 w-32 mx-auto mb-6 object-contain" />
          
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Eventos e Hospedagem em Meio à Natureza</h1>
          
          <p className="max-w-2xl mx-auto mb-6 text-lg text-amber-900/90 md:text-xl">
            Um refúgio natural perfeito para seus momentos mais especiais, onde a natureza e o conforto se encontram para criar experiências inesquecíveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-amber-50 p-4 rounded-lg shadow-sm flex items-center">
              <Calendar className="h-6 w-6 text-amber-700 mr-3" />
              <span className="text-amber-800 font-medium">Estrutura completa para eventos</span>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg shadow-sm flex items-center">
              <Hotel className="h-6 w-6 text-amber-700 mr-3" />
              <span className="text-amber-800 font-medium">Hospedagem confortável</span>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <Link to="/agendamento">
              <Button className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white px-6">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Visita
              </Button>
            </Link>
            
            <a href="https://www.instagram.com/sitionossolugar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 font-medium text-white transition-all duration-300 rounded-lg shadow-lg hover:scale-105 bg-gradient-to-r from-amber-600 via-red-600 to-purple-600">
              <Instagram size={20} />
              <span>Conheça no Instagram</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg preserveAspectRatio="none" width="100%" height="80" viewBox="0 0 1200 120" className="fill-amber-200">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;
