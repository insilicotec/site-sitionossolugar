
import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsappButtonProps {
  phone: string;
  message: string;
}

const WhatsappButton = ({ phone, message }: WhatsappButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleClick = () => {
    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-lg p-4 w-64"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1"
              aria-label="Fechar dica"
            >
              <X size={14} />
            </button>
            <p className="text-gray-700 text-sm">
              Clique para falar diretamente conosco pelo WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="bg-amber-700 hover:bg-amber-800 text-white p-4 rounded-xl shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageSquare size={30} fill="white" />
      </motion.button>
    </div>
  );
};

export default WhatsappButton;
