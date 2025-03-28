
import React from 'react';
import { Map, MapPin } from 'lucide-react';

const GoogleMap = () => {
  return (
    <div className="relative w-full">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-sitio-green-dark text-white py-2 px-6 rounded-full shadow-nature z-10 flex items-center gap-2">
        <Map size={18} className="text-sitio-sunshine" />
        <span>Nossa Localização</span>
      </div>
      
      <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-nature border-2 border-sitio-leaf/20 animate-scale-up relative group">
        <div className="absolute inset-0 bg-sitio-green-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse-soft pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-sitio-green-dark text-white py-2 px-4 rounded-lg shadow-md flex items-center gap-2">
            <MapPin size={16} className="text-sitio-sunshine" />
            <span>Sítio Nosso Lugar</span>
          </div>
        </div>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.464!2d-48.318734!3d-1.494593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48b5d7d1bf057%3A0x7edb7dc9110c08b0!2sS%C3%ADtio%20Nosso%20Lugar!5e0!3m2!1spt-BR!2sbr!4v1696428120961!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Sítio Nosso Lugar"
          className="w-full h-full transition-all duration-500 group-hover:scale-105"
        ></iframe>
      </div>
      
      <div className="flex justify-center mt-4">
        <a 
          href="https://goo.gl/maps/5dR5JQZ9eMnrMnxn6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sitio-green-dark flex items-center gap-2 py-2 px-4 hover:bg-sitio-sand rounded-full transition-colors"
        >
          <MapPin size={16} />
          <span>Ver no Google Maps</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
