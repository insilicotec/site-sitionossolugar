
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-nature hover:shadow-leaf transition-all duration-500 p-6 text-center relative overflow-hidden group">
      {/* Top corner decoration */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-sitio-leaf/20 border-l-[50px] border-l-transparent"></div>
      
      {/* Icon container with animation */}
      <div className="mx-auto w-20 h-20 flex items-center justify-center bg-gradient-to-br from-sitio-green-light/30 to-sitio-blue-water/10 rounded-full mb-4 text-sitio-green-dark relative z-10 group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 rounded-full bg-sitio-leaf/10 animate-pulse-soft"></div>
        <div className="transform group-hover:rotate-12 transition-transform duration-500">
          {icon}
        </div>
      </div>
      
      {/* Text content */}
      <h3 className="text-xl font-semibold mb-3 text-sitio-green-forest group-hover:text-sitio-leaf transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 relative z-10">{description}</p>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sitio-green-dark via-sitio-leaf to-sitio-blue-water transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default ServiceCard;
