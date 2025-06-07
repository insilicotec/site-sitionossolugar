
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { ReservationData } from '@/components/reservation/types';
import WhatsappButton from '@/components/WhatsappButton';
import { Instagram, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Agendamento = () => {
  const [whatsappMessage, setWhatsappMessage] = useState('Olá! Gostaria de fazer uma reserva no Sítio Nosso Lugar.');

  const handleSubmit = (data: ReservationData) => {
    try {
      console.log("Reservation data received:", data);
    
      // Format the date
      const formattedDate = data.dataEvento 
        ? format(data.dataEvento, "dd/MM/yyyy", { locale: ptBR }) 
        : "Data não selecionada";
    
      // Create WhatsApp message
      const message = `NOVA RESERVA - SITIO NOSSO LUGAR
    
DADOS PESSOAIS
Nome: ${data.nome}
Cidade: ${data.cidade}

DETALHES DO EVENTO
Data: ${formattedDate}
Tipo: ${getEventTypeText(data.tipoEvento)}
Quantidade de Pessoas: ${data.quantidadePessoas}

${data.observacoes ? `OBSERVACOES\n${data.observacoes}` : ""}

Agradecemos seu interesse em realizar seu evento no Sitio Nosso Lugar!`;

    setWhatsappMessage(message);
    
    toast.success("Formulário enviado com sucesso!");
    
    // Redirect to WhatsApp
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
      console.log("Opening WhatsApp URL");
      window.open(whatsappUrl, '_blank');
    }, 1000);
  } catch (error) {
    console.error("Error processing form:", error);
    toast.error("Erro ao processar o formulário");
  }
};

  const getEventTypeText = (eventType: string): string => {
    const eventTypes: Record<string, string> = {
      'casamento': 'Casamento',
      'aniversario': 'Aniversario',
      'corporativo': 'Evento Corporativo',
      'dayuse': 'Day Use',
      'pacoteFechado': 'Pacote fechado (apenas o espaço)',
      'outro': 'Outro evento'
    };
    
    return eventTypes[eventType] || eventType;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-sitio-green-dark text-white py-12">
          <div className="container px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agende Seu Evento</h1>
            <p className="text-lg max-w-3xl mx-auto text-black">
              Preencha o formulário abaixo com os detalhes do seu evento.
              Entraremos em contato para confirmar a disponibilidade e finalizar sua reserva.
            </p>
          </div>
        </section>
        
        {/* Reservation Form Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-lg p-6 md:p-8 border border-amber-200 transition-all duration-300 hover:shadow-xl animate-fade-in">
              <h2 className="text-2xl font-bold text-sitio-green-dark mb-6">Formulário de Reserva</h2>
              <ReservationForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Discreet Developer Credits */}
      <div className="py-2 bg-gray-100 text-center text-xs text-gray-500">
        <div className="container px-4">
          <p>
            Desenvolvido por <a href="https://www.instagram.com/insilicotec/" target="_blank" rel="noopener noreferrer" className="text-sitio-green-dark hover:underline">Insilico tecnologia</a> • 
            <a href="https://wa.me/5591988939655" target="_blank" rel="noopener noreferrer" className="ml-1 text-sitio-green-dark hover:underline">(91) 98893-9655</a> • 
            <a href="https://www.instagram.com/insilicotec/" target="_blank" rel="noopener noreferrer" className="ml-1 text-sitio-green-dark hover:underline">@insilicotec</a>
          </p>
        </div>
      </div>
      
      <WhatsappButton 
        phone="559184731385" 
        message={whatsappMessage} 
      />
    </div>
  );
};

export default Agendamento;
