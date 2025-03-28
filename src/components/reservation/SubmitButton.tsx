
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useState } from 'react';

const SubmitButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  return (
    <Button 
      type="submit" 
      className="w-full bg-sitio-green-dark hover:bg-sitio-accent text-white font-medium py-2 px-4 rounded transition-all transform hover:scale-[1.02] shadow-md"
      disabled={isSubmitting}
    >
      <Send className="w-4 h-4 mr-2" />
      Enviar para WhatsApp
    </Button>
  );
};

export default SubmitButton;
