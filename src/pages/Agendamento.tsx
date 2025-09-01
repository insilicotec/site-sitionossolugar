import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import StepperForm from '@/components/reservation/StepperForm';
import { SUCCESS_MESSAGES } from '@/lib/constants';
import { AnalyticsService } from '@/services/analytics';
import { WhatsAppService } from '@/services/whatsapp';
import type { ReservationData } from '@/types/forms';
import { useState } from 'react';
import { toast } from 'sonner';

const Agendamento = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleSubmit = (data: ReservationData) => {
    try {
      console.log('Reservation data received:', data);

      // Validate required fields
      if (
        !data.nome ||
        !data.cidade ||
        !data.dataEvento ||
        !data.tipoEvento ||
        !data.quantidadePessoas
      ) {
        toast.error('Por favor, preencha todos os campos obrigatórios');
        return;
      }

      // Track form submission
      AnalyticsService.trackFormSubmission('reservation', true);

      // Send WhatsApp message
      WhatsAppService.sendReservationInquiry(data);

      toast.success(SUCCESS_MESSAGES.reservationSent);
    } catch (error) {
      console.error('Error processing form:', error);
      AnalyticsService.trackFormSubmission('reservation', false);
      toast.error('Erro ao processar o formulário. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section - Only show on first step */}
        {currentStep === 1 && (
          <section className="bg-sitio-green-dark text-white py-12">
            <div className="container px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Agende Seu Evento</h1>
              <p className="text-lg max-w-3xl mx-auto text-black">
                Preencha o formulário abaixo com os detalhes do seu evento. Entraremos em contato
                para confirmar a disponibilidade e finalizar sua reserva.
              </p>
            </div>
          </section>
        )}

        {/* Reservation Form Section */}
        <section
          className={`pb-12 bg-gradient-to-br from-gray-50 to-gray-100 ${currentStep === 1 ? 'pt-2' : 'pt-8'}`}
        >
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              {currentStep === 1 && (
                <div className="text-center mb-4">
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Siga os passos abaixo para fazer sua reserva de forma simples e rápida
                  </p>
                </div>
              )}
              <StepperForm onSubmit={handleSubmit} onStepChange={setCurrentStep} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Discreet Developer Credits */}
      <div className="py-2 bg-gray-100 text-center text-xs text-gray-500">
        <div className="container px-4">
          {' '}
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
              className="ml-1 text-amber-600 hover:text-amber-700 hover:underline"
            >
              (91) 98893-9655
            </a>{' '}
            •
            <a
              href="https://www.instagram.com/insilicotec/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-amber-600 hover:text-amber-700 hover:underline"
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
