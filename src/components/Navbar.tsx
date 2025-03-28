
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sitio-sand shadow-md relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-sitio-green-dark text-2xl font-bold">Sítio Nosso Lugar</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-sitio-green-dark hover:text-sitio-earth transition-colors">
              Início
            </Link>
            <Link to="/agendamento" className="text-sitio-green-dark hover:text-sitio-earth transition-colors">
              Agendamento
            </Link>
            <Link to="/parcerias" className="text-sitio-green-dark hover:text-sitio-earth transition-colors">
              Parcerias
            </Link>
            <a 
              href="https://www.instagram.com/sitionossolugar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sitio-green-dark hover:text-sitio-earth transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sitio-green-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-sitio-sand shadow-lg py-4 px-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sitio-green-dark hover:text-sitio-earth transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/agendamento" 
                className="text-sitio-green-dark hover:text-sitio-earth transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Agendamento
              </Link>
              <Link 
                to="/parcerias" 
                className="text-sitio-green-dark hover:text-sitio-earth transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Parcerias
              </Link>
              <a 
                href="https://www.instagram.com/sitionossolugar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sitio-green-dark hover:text-sitio-earth transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
