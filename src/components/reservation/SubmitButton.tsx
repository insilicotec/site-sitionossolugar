
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const SubmitButton = () => {
  return <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-700 font-medium py-2 px-4 shadow-md transition-all text-lg text-gray-50 rounded-full">
      <Send className="w-4 h-4 mr-2" />
      Enviar para WhatsApp
    </Button>;
};

export default SubmitButton;
