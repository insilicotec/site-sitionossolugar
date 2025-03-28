
import { Home, Calendar, MapPin, Handshake, Instagram } from 'lucide-react';
import NavLink from './NavLink';

interface DesktopNavProps {
  currentPath: string;
  scrolled: boolean;
  onNavigate: (path: string) => void;
}

const DesktopNav = ({ currentPath, scrolled, onNavigate }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavLink 
        to="/" 
        active={currentPath === '/'} 
        scrolled={scrolled}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/');
        }}
      >
        <Home size={16} className="mr-1" />
        <span>Início</span>
      </NavLink>
      
      <NavLink 
        to="/agendamento" 
        active={currentPath === '/agendamento'} 
        scrolled={scrolled}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/agendamento');
        }}
      >
        <Calendar size={16} className="mr-1" />
        <span>Agendamento</span>
      </NavLink>
      
      <NavLink 
        to="/como-chegar" 
        active={currentPath === '/como-chegar'} 
        scrolled={scrolled}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/como-chegar');
        }}
      >
        <MapPin size={16} className="mr-1" />
        <span>Como Chegar</span>
      </NavLink>
      
      <NavLink 
        to="/parcerias" 
        active={currentPath === '/parcerias'} 
        scrolled={scrolled}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/parcerias');
        }}
      >
        <Handshake size={16} className="mr-1" />
        <span>Parcerias</span>
      </NavLink>
      
      <a 
        href="https://www.instagram.com/sitionossolugar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 rounded-full px-3 py-2 transition-all text-white bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 hover:opacity-90"
      >
        <Instagram size={18} />
        <span>Instagram</span>
      </a>
    </nav>
  );
};

export default DesktopNav;
