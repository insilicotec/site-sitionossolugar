import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Home, Calendar, Handshake, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detectar rolagem para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar menu ao mudar de página
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Verificar se um link está ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <h1 className={`text-sitio-green-dark text-2xl font-bold transition-all group-hover:scale-105 ${
                scrolled ? '' : 'text-shadow-sm'
              }`}>
                Sítio Nosso Lugar
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 items-center">
              <NavLink to="/" active={isActive('/')}>
                <Home size={18} className="mr-1" />
                <span>Início</span>
              </NavLink>
              <NavLink to="/agendamento" active={isActive('/agendamento')}>
                <Calendar size={18} className="mr-1" />
                <span>Agendamento</span>
              </NavLink>
              <NavLink to="/como-chegar" active={isActive('/como-chegar')}>
                <MapPin size={18} className="mr-1" />
                <span>Como Chegar</span>
              </NavLink>
              <NavLink to="/parcerias" active={isActive('/parcerias')}>
                <Handshake size={18} className="mr-1" />
                <span>Parcerias</span>
              </NavLink>
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sitio-green-dark hover:text-sitio-accent transition-colors px-3 py-2 rounded-full hover:bg-sitio-blue-light/50"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-sitio-green-dark p-2 rounded-full hover:bg-sitio-blue-light/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50 animate-slide-up">
              <div className="flex flex-col space-y-2">
                <MobileNavLink to="/" active={isActive('/')}>
                  <Home size={18} className="mr-2" />
                  <span>Início</span>
                </MobileNavLink>
                <MobileNavLink to="/agendamento" active={isActive('/agendamento')}>
                  <Calendar size={18} className="mr-2" />
                  <span>Agendamento</span>
                </MobileNavLink>
                <MobileNavLink to="/como-chegar" active={isActive('/como-chegar')}>
                  <MapPin size={18} className="mr-2" />
                  <span>Como Chegar</span>
                </MobileNavLink>
                <MobileNavLink to="/parcerias" active={isActive('/parcerias')}>
                  <Handshake size={18} className="mr-2" />
                  <span>Parcerias</span>
                </MobileNavLink>
                <a 
                  href="https://www.instagram.com/sitionossolugar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sitio-green-dark p-3 rounded-lg hover:bg-sitio-blue-light/30 transition-colors"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Add spacer div to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

// Componente de link de navegação para desktop
const NavLink = ({ 
  to, 
  active, 
  children 
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      to={to} 
      className={`
        flex items-center px-3 py-2 rounded-full transition-all duration-300
        ${active 
          ? 'bg-sitio-green-dark text-white font-medium shadow-md' 
          : 'text-sitio-green-dark hover:bg-sitio-sand/50 hover:text-sitio-earth'
        }
      `}
    >
      {children}
    </Link>
  );
};

// Componente de link de navegação para mobile
const MobileNavLink = ({ 
  to, 
  active, 
  children 
}: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      to={to} 
      className={`
        flex items-center p-3 rounded-lg transition-all duration-300
        ${active 
          ? 'bg-sitio-green-dark text-white font-medium' 
          : 'text-sitio-green-dark hover:bg-sitio-sand/30'
        }
      `}
    >
      {children}
    </Link>
  );
};

export default Navbar;
