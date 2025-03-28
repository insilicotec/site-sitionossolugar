
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps { 
  to: string; 
  active: boolean; 
  scrolled: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ to, active, scrolled, children, onClick }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`relative flex items-center gap-1 rounded-full px-3 py-2 font-medium transition-all duration-300 overflow-hidden group ${
        active
          ? 'text-amber-800 bg-amber-50'
          : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50/50'
      }`}
    >
      {active && (
        <motion.span 
          layoutId="navCircle"
          className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-amber-600"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          style={{ translateX: '-50%', translateY: '8px' }}
        />
      )}
      {children}
    </Link>
  );
};

export default NavLink;
