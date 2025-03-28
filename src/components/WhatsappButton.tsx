
import { MessageCircle } from 'lucide-react';

interface WhatsappButtonProps {
  phone: string;
  message: string;
}

const WhatsappButton = ({ phone, message }: WhatsappButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsappButton;
