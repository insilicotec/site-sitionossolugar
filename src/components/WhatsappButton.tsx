
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
    // Format the phone number and message for WhatsApp API
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    console.log("Opening WhatsApp with URL:", whatsappUrl);
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
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <MessageSquare size={30} fill="white" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default WhatsappButton;
