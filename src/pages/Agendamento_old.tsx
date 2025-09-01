import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StepperForm from '@/components/reservation/StepperForm';
import { ReservationData } from '@/components/reservation/types';
import { Instagram, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Agendamento = () => {
  const [whatsappMessage, setWhatsappMessage] = useState(
    '🌿 *SÍTIO NOSSO LUGAR* 🌟\n\nOlá! Gostaria de fazer uma reserva para um evento especial.\n\n💚 Aguardo contato!'
  );

  const handleSubmit = (data: ReservationData) => {
    try {
      console.log('Reservation data received:', data);

      // Format the date
      const formattedDate = data.dataEvento
        ? format(data.dataEvento, 'dd/MM/yyyy', { locale: ptBR })
        : 'Data não selecionada'; // Create WhatsApp message
      const message = `*NOVA RESERVA - SITIO NOSSO LUGAR*

*DADOS PESSOAIS*
• Nome: ${data.nome}
• Cidade: ${data.cidade}

*DETALHES DO EVENTO*
• Data: ${formattedDate}
• Tipo: ${getEventTypeText(data.tipoEvento)}
• Quantidade de Pessoas: ${data.quantidadePessoas}

${data.observacoes ? `*OBSERVACOES*\n${data.observacoes}\n\n` : ''}Agradecemos seu interesse em realizar seu evento no Sítio Nosso Lugar!

Em breve entraremos em contato para confirmar os detalhes.`;

      setWhatsappMessage(message);

      toast.success('Formulário enviado com sucesso!');

      // Redirect to WhatsApp
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
        console.log('Opening WhatsApp URL');
        window.open(whatsappUrl, '_blank');
      }, 1000);
    } catch (error) {
      console.error('Error processing form:', error);
      toast.error('Erro ao processar o formulário');
    }
  };

  const getEventTypeText = (eventType: string): string => {
    const eventTypes: Record<string, string> = {
      casamento: 'Casamento',
      aniversario: 'Aniversario',
      corporativo: 'Evento Corporativo',
      dayuse: 'Day Use',
      pacoteFechado: 'Pacote fechado (apenas o espaço)',
      outro: 'Outro evento',
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
              Preencha o formulário abaixo com os detalhes do seu evento. Entraremos em contato para
              confirmar a disponibilidade e finalizar sua reserva.
            </p>
          </div>
        </section>
        {/* Reservation Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Reserve Seu Evento</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Siga os passos abaixo para fazer sua reserva de forma simples e rápida
                </p>
              </div>
              <StepperForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* Discreet Developer Credits */}
      <div className="py-2 bg-gray-100 text-center text-xs text-gray-500">
        <div className="container px-4">
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/insilicotec/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 hover:underline"
            >
              Insilico tecnologia
            </a>{' '}
            •
            <a
              href="https://wa.me/5591988939655"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-sitio-green-dark hover:underline"
            >
              (91) 98893-9655
            </a>{' '}
            •
            <a
              href="https://www.instagram.com/insilicotec/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-sitio-green-dark hover:underline"
            >
              @insilicotec
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
