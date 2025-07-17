
import { Button } from '@/components/ui/button';
import { Calendar, Hotel, Instagram, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (    <section className="relative pt-20 md:pt-28 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <img 
              src="/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png" 
              alt="Sítio Nosso Lugar Logo" 
              className="h-20 w-20 md:h-28 md:w-28 mx-auto object-contain" 
            />
          </div>
          
          {/* Main title - keeping amber color */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 md:mb-6 leading-tight px-2">
            Eventos e Hospedagem
            <span className="block text-amber-800">em Meio à Natureza</span>
          </h1>            {/* Subtitle */}
          <p className="max-w-3xl mx-auto mb-8 md:mb-10 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-4 md:px-0">
            Um refúgio natural perfeito para <span className="text-amber-800 font-semibold">seus momentos mais especiais</span>, onde a natureza e o conforto se encontram para criar experiências inesquecíveis.
          </p>
            
            {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-8 md:mb-10 px-2 md:px-0">
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-amber-200/50 flex items-center space-x-3 md:space-x-4">
              <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-amber-700" />
              </div>
              <span className="text-gray-800 font-medium text-sm md:text-base">Estrutura completa para eventos</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-amber-200/50 flex items-center space-x-3 md:space-x-4">
              <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                <Hotel className="h-5 w-5 md:h-6 md:w-6 text-amber-700" />
              </div>
              <span className="text-gray-800 font-medium text-sm md:text-base">Hospedagem confortável</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-amber-200/50 flex items-center space-x-3 md:space-x-4 md:col-span-2 lg:col-span-1">
              <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                <Utensils className="h-5 w-5 md:h-6 md:w-6 text-amber-700" />
              </div>
              <span className="text-gray-800 font-medium text-sm md:text-base">Restaurante completo</span>
            </div>
          </div>          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/agendamento">
              <Button className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-800/25 transform hover:-translate-y-0.5 hover:scale-105 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-amber-500/70 animate-sheen-btn animate-float relative z-10">
                <Calendar className="mr-2 h-5 w-5" />
                Entre em contato conosco
              </Button>
            </Link>
            <a 
              href="https://www.instagram.com/sitionossolugar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 text-lg font-medium text-amber-800 bg-white border-2 border-amber-800 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-800/25 transform hover:-translate-y-0.5"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom wave - more subtle */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          preserveAspectRatio="none" 
          width="100%" 
          height="60" 
          viewBox="0 0 1200 120" 
          className="fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".4" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".6" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};
export default HeroSection;
