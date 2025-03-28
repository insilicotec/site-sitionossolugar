
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Home, Calendar, MapPin, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  // Função para navegar e garantir que vá para o topo
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-white/90 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            className="text-2xl font-display font-bold"
          >
            <span className="text-gray-900">
              Sítio Nosso Lugar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              active={location.pathname === '/'} 
              scrolled={scrolled}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              <Home size={16} className="mr-1" />
              <span>Início</span>
            </NavLink>
            
            <NavLink 
              to="/agendamento" 
              active={location.pathname === '/agendamento'} 
              scrolled={scrolled}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/agendamento');
              }}
            >
              <Calendar size={16} className="mr-1" />
              <span>Agendamento</span>
            </NavLink>
            
            <NavLink 
              to="/como-chegar" 
              active={location.pathname === '/como-chegar'} 
              scrolled={scrolled}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/como-chegar');
              }}
            >
              <MapPin size={16} className="mr-1" />
              <span>Como Chegar</span>
            </NavLink>
            
            <NavLink 
              to="/parcerias" 
              active={location.pathname === '/parcerias'} 
              scrolled={scrolled}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/parcerias');
              }}
            >
              <Handshake size={16} className="mr-1" />
              <span>Parcerias</span>
            </NavLink>
            
            <a 
              href="https://www.instagram.com/sitionossolugar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full px-3 py-2 transition-all text-nature-600 hover:bg-nature-50"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-gray-800 hover:bg-gray-100"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
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
                active={location.pathname === '/'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/');
                }}
              >
                <Home size={18} className="mr-2" />
                <span>Início</span>
              </MobileNavLink>
              
              <MobileNavLink 
                to="/agendamento" 
                active={location.pathname === '/agendamento'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/agendamento');
                }}
              >
                <Calendar size={18} className="mr-2" />
                <span>Agendamento</span>
              </MobileNavLink>
              
              <MobileNavLink 
                to="/como-chegar" 
                active={location.pathname === '/como-chegar'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/como-chegar');
                }}
              >
                <MapPin size={18} className="mr-2" />
                <span>Como Chegar</span>
              </MobileNavLink>
              
              <MobileNavLink 
                to="/parcerias" 
                active={location.pathname === '/parcerias'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/parcerias');
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
                className="flex items-center py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <Instagram size={18} className="mr-2 text-pink-500" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const NavLink = ({ 
  to, 
  active, 
  scrolled, 
  children,
  onClick
}: { 
  to: string; 
  active: boolean; 
  scrolled: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`relative flex items-center gap-1 rounded-full px-3 py-2 font-medium transition-all duration-300 overflow-hidden group ${
        active
          ? 'text-nature-700 bg-nature-50'
          : 'text-gray-700 hover:text-nature-700 hover:bg-nature-50/50'
      }`}
    >
      {active && (
        <motion.span 
          layoutId="navCircle"
          className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-nature-500"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          style={{ translateX: '-50%', translateY: '8px' }}
        />
      )}
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  active, 
  children,
  onClick
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
}) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`flex items-center py-3 px-4 rounded-lg ${
        active 
          ? 'bg-nature-50 text-nature-700 font-medium' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
