
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import DesktopNav from './navigation/DesktopNav';
import MobileMenu from './navigation/MobileMenu';

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

  // Function to navigate and ensure scroll to top
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
          {/* Logo */}          <Link
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            className="flex items-center gap-3 text-2xl font-display font-bold group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png" 
                alt="Sítio Nosso Lugar Logo" 
                className="h-12 w-12 object-contain group-hover:rotate-6 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>            <div className="flex flex-col">
              <span className="text-gray-900 leading-tight bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 bg-clip-text text-transparent">
                Sítio Nosso Lugar
              </span>
              <span className="text-xs font-normal text-amber-800 leading-tight opacity-95">
                Eventos & Hospedagem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav 
            currentPath={location.pathname}
            scrolled={scrolled}
            onNavigate={handleNavigation}
          />

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
        <MobileMenu 
          isOpen={isOpen}
          currentPath={location.pathname}
          onNavigate={handleNavigation}
        />
      </div>
    </motion.header>
  );
};

export default Navbar;
