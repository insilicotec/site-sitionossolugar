
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm, { ReservationData } from '@/components/ReservationForm';
import WhatsappButton from '@/components/WhatsappButton';

const Agendamento = () => {
  const [formData, setFormData] = useState<ReservationData | null>(null);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSubmit = (data: ReservationData) => {
    setFormData(data);
    
    // Format the date
    const formattedDate = data.dataEvento 
      ? format(data.dataEvento, "dd/MM/yyyy", { locale: ptBR }) 
      : "Data não selecionada";
    
    // Create WhatsApp message
    const message = `*Nova Reserva no Sítio Nosso Lugar*
    
*Dados Pessoais:*
Nome: ${data.nome} ${data.sobrenome}
Cidade: ${data.cidade}

*Detalhes do Evento:*
Data: ${formattedDate}
Tipo de Evento: ${data.tipoEvento || "Não especificado"}

*Serviços Solicitados:*
${data.apenasLocal ? "✓" : "☐"} Apenas o local
${data.incluiComida ? "✓" : "☐"} Inclui comida
${data.buffet ? "✓" : "☐"} Buffet completo
${data.dj ? "✓" : "☐"} DJ
${data.decoracao ? "✓" : "☐"} Decoração

*Observações:*
${data.observacoes || "Nenhuma observação adicional"}`;

    setWhatsappMessage(message);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/559184731385?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sitio-green-dark text-white py-12">
          <div className="container px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agende Seu Evento</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Preencha o formulário abaixo com os detalhes do seu evento.
              Entraremos em contato para confirmar a disponibilidade e finalizar sua reserva.
            </p>
          </div>
        </section>
        
        {/* Reservation Form Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-sitio-earth mb-6">Formulário de Reserva</h2>
              <ReservationForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-12 bg-sitio-sand">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-sitio-earth mb-4">Informações Importantes</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-sitio-green-dark mr-2">•</span>
                    <span>As reservas devem ser feitas com pelo menos 15 dias de antecedência.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-green-dark mr-2">•</span>
                    <span>É necessário um sinal de 30% para confirmação da reserva.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-green-dark mr-2">•</span>
                    <span>Horário de funcionamento dos eventos: das 10h às 23h.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-green-dark mr-2">•</span>
                    <span>Capacidade máxima: 200 pessoas (verificar disponibilidade).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-green-dark mr-2">•</span>
                    <span>Os valores variam conforme os serviços solicitados.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-sitio-earth mb-4">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Posso levar meu próprio buffet?</h3>
                    <p className="text-gray-700">Sim, você pode optar por contratar seu próprio serviço de buffet, mas oferecemos opções completas também.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Há estacionamento no local?</h3>
                    <p className="text-gray-700">Sim, oferecemos estacionamento gratuito para os convidados.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">O espaço é coberto?</h3>
                    <p className="text-gray-700">Sim, temos espaços cobertos e ao ar livre para seu evento.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Como funciona o agendamento?</h3>
                    <p className="text-gray-700">Após o envio do formulário, entraremos em contato para confirmar detalhes e disponibilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      {whatsappMessage ? (
        <WhatsappButton phone="559184731385" message={whatsappMessage} />
      ) : (
        <WhatsappButton phone="559184731385" message="Olá! Gostaria de fazer uma reserva no Sítio Nosso Lugar." />
      )}
    </div>
  );
};

export default Agendamento;
