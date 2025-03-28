
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sitio-green-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sítio Nosso Lugar</h3>
            <p className="mb-2">Seu espaço perfeito para eventos e momentos especiais.</p>
            <p>Um contato com a natureza para momentos inesquecíveis.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="flex items-center mb-3">
              <Phone size={18} className="mr-2" />
              <a 
                href="https://wa.me/559184731385" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                (91) 8473-1385
              </a>
            </div>
            <div className="flex items-center">
              <Instagram size={18} className="mr-2" />
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @sitionossolugar
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>Aniversários</li>
              <li>Casamentos</li>
              <li>Eventos corporativos</li>
              <li>Buffet completo</li>
              <li>Espaço para lazer</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sitio-green-light mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sítio Nosso Lugar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
