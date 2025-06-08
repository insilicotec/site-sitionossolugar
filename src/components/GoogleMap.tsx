
import { MapPin, Navigation, Route } from 'lucide-react';
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
            <MapPin className="text-amber-700" size={18} />
            <span className="font-medium text-gray-800">Nossa Localização</span>
          </motion.div>
        </div>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.242!2d-46.9632637!3d-1.138923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92af19c9f0d36633%3A0x4df4b7afb66ebf9a!2sSitio%20Nosso%20Lugar!5e0!3m2!1spt-BR!2sbr!4v1696428120961!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Sítio Nosso Lugar"
          className="w-full h-full"
        />
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
          <motion.a 
            href="https://www.google.com/maps/place/Sitio+Nosso+Lugar/@-1.1395237,-46.9644975,17z/data=!4m6!3m5!1s0x92af19c9f0d36633:0x4df4b7afb66ebf9a!8m2!3d-1.138923!4d-46.9632637!16s%2Fg%2F11g8whxq5j?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-700 px-5 py-3 rounded-lg shadow-md flex items-center gap-2 text-sm font-medium text-white hover:bg-amber-800 transition-all duration-300"
            whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          >
            <Navigation size={16} />
            <span>Ver no Google Maps</span>
          </motion.a>
          
          <motion.a 
            href="https://waze.com/ul?ll=-1.138923,-46.9632637&navigate=yes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 px-5 py-3 rounded-lg shadow-md flex items-center gap-2 text-sm font-medium text-white hover:bg-blue-700 transition-all duration-300"
            whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          >
            <Route size={16} />
            <span>Abrir no Waze</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleMap;
