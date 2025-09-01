import { EnhancedLogo } from '@/components/atoms/EnhancedLogo';
import { MobileMenuButton } from '@/components/atoms/MobileMenuButton';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-white/90 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <EnhancedLogo
            variant="navbar"
            size="md"
            showText={true}
            interactive={true}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          />
          {/* Desktop Navigation */}
          <DesktopNav
            currentPath={location.pathname}
            scrolled={scrolled}
            onNavigate={handleNavigation}
          />
          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} currentPath={location.pathname} onNavigate={handleNavigation} />
      </div>
    </motion.header>
  );
};

export default Navbar;
