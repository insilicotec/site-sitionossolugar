
import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GoogleMap = () => {
  return (
    <motion.div 
      className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-[450px]">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div 
            className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2"
            whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <MapPin className="text-emerald-500" size={18} />
            <span className="font-medium text-gray-800">Nossa Localização</span>
          </motion.div>
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
          className="w-full h-full"
        ></iframe>
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
          <motion.a 
            href="https://goo.gl/maps/5dR5JQZ9eMnrMnxn6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
            whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          >
            <Navigation size={16} />
            <span>Como Chegar</span>
          </motion.a>
          
          <motion.a 
            href="https://goo.gl/maps/5dR5JQZ9eMnrMnxn6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-500 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
            whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          >
            <ExternalLink size={16} />
            <span>Ver no Google Maps</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleMap;
