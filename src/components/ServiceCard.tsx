
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center">
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-sitio-green-light rounded-full mb-4 text-sitio-green-dark">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-sitio-earth">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
