
import { Link } from 'react-router-dom';

interface MobileNavLinkProps { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
}

const MobileNavLink = ({ to, active, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`flex items-center py-3 px-4 rounded-lg ${
        active 
          ? 'bg-amber-50 text-amber-800 font-medium' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};

export default MobileNavLink;
