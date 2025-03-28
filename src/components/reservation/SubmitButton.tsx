
import { Button } from '@/components/ui/button';

const SubmitButton = () => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-sitio-green-dark hover:bg-sitio-accent text-white transition-all transform hover:scale-[1.02] shadow-md"
    >
      Enviar para WhatsApp
    </Button>
  );
};

export default SubmitButton;
