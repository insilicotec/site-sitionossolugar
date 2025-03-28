
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const SubmitButton = () => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-sitio-green-dark hover:bg-sitio-accent text-white font-medium py-2 px-4 rounded shadow-md transition-all"
    >
      <Send className="w-4 h-4 mr-2" />
      Enviar para WhatsApp
    </Button>
  );
};

export default SubmitButton;
