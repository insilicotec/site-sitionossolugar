
import { Instagram, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sitio-green-dark to-sitio-green-dark/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Sítio Nosso Lugar</h3>
            <p className="mb-2 text-white/90">Seu espaço perfeito para eventos e momentos especiais em meio à natureza.</p>
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-sitio-accent/70 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/559184731385" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-sitio-accent/70 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contato e Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/559184731385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sitio-accent transition-colors"
                >
                  (91) 8473-1385
                </a>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contato@sitionossolugar.com.br" 
                  className="hover:text-sitio-accent transition-colors"
                >
                  contato@sitionossolugar.com.br
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <p>Rod. Bernardo Sayão, Km 5, Vila Fátima, Belém - PA</p>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mt-1 mr-3 flex-shrink-0" />
                <p>Atendimento: Seg-Sex 9h às 18h</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sitio-accent transition-colors flex items-center">
                  <span className="mr-2">•</span> Início
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="hover:text-sitio-accent transition-colors flex items-center">
                  <span className="mr-2">•</span> Agendamento
                </Link>
              </li>
              <li>
                <Link to="/como-chegar" className="hover:text-sitio-accent transition-colors flex items-center">
                  <span className="mr-2">•</span> Como Chegar
                </Link>
              </li>
              <li>
                <Link to="/parcerias" className="hover:text-sitio-accent transition-colors flex items-center">
                  <span className="mr-2">•</span> Parcerias
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Sítio Nosso Lugar. Todos os direitos reservados.</p>
          <p className="text-white/60 text-sm mt-2">Desenvolvido com 💚 para momentos especiais</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
