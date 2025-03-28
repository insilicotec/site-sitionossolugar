import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
const SubmitButton = () => {
  return <Button type="submit" className="w-full bg-sitio-green-dark hover:bg-sitio-earth font-medium py-2 px-4 shadow-md transition-all text-lg bg-green-600 hover:bg-green-500 text-gray-50 rounded-full">
      <Send className="w-4 h-4 mr-2" />
      Enviar para WhatsApp
    </Button>;
};
export default SubmitButton;