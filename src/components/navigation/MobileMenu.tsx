
import { motion } from 'framer-motion';
import { Home, Calendar, MapPin, Handshake, Instagram } from 'lucide-react';
import MobileNavLink from './MobileNavLink';

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const MobileMenu = ({ isOpen, currentPath, onNavigate }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white rounded-lg mt-4 shadow-lg overflow-hidden"
    >
      <div className="flex flex-col p-4 gap-2">
        <MobileNavLink 
          to="/" 
          active={currentPath === '/'}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
        >
          <Home size={18} className="mr-2" />
          <span>Início</span>
        </MobileNavLink>
        
        <MobileNavLink 
          to="/agendamento" 
          active={currentPath === '/agendamento'}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/agendamento');
          }}
        >
          <Calendar size={18} className="mr-2" />
          <span>Agendamento</span>
        </MobileNavLink>
        
        <MobileNavLink 
          to="/como-chegar" 
          active={currentPath === '/como-chegar'}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/como-chegar');
          }}
        >
          <MapPin size={18} className="mr-2" />
          <span>Como Chegar</span>
        </MobileNavLink>
        
        <MobileNavLink 
          to="/parcerias" 
          active={currentPath === '/parcerias'}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/parcerias');
          }}
        >
          <Handshake size={18} className="mr-2" />
          <span>Parcerias</span>
        </MobileNavLink>
        
        <div className="w-full h-px bg-gray-100 my-1"></div>
        
        <a 
          href="https://www.instagram.com/sitionossolugar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center py-3 px-4 rounded-lg text-white bg-gradient-to-r from-amber-600 via-red-600 to-purple-600"
        >
          <Instagram size={18} className="mr-2" />
          <span>Instagram</span>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
