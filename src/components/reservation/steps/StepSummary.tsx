import { UseFormReturn } from 'react-hook-form';
import {
  CheckCircle,
  User,
  Calendar,
  Users,
  MessageSquare,
  Edit,
  MapPin,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReservationData } from '../types';

interface StepSummaryProps {
  form: UseFormReturn<ReservationData>;
  goToStep: (step: number) => void;
}

const eventTypeLabels: { [key: string]: string } = {
  casamento: 'Casamento',
  aniversario: 'Aniversário',
  confraternizacao: 'Confraternização',
  'evento-corporativo': 'Evento Corporativo',
  'ensaio-fotografico': 'Ensaio Fotográfico',
  outros: 'Outros',
};

const StepSummary = ({ form, goToStep }: StepSummaryProps) => {
  const formData = form.getValues();
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Não informada';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  };

  const summaryItems = [
    {
      icon: User,
      title: 'Dados Pessoais',
      content: (
        <div className="space-y-1">
          <p>
            <span className="font-medium">Nome:</span> {formData.nome || 'Não informado'}
          </p>
          <p>
            <span className="font-medium">Cidade:</span> {formData.cidade || 'Não informada'}
          </p>
        </div>
      ),
      stepNumber: 1,
    },
    {
      icon: Calendar,
      title: 'Detalhes do Evento',
      content: (
        <div className="space-y-1">
          <p>
            <span className="font-medium">Data:</span> {formatDate(formData.dataEvento)}
          </p>
          <p>
            <span className="font-medium">Tipo:</span>{' '}
            {eventTypeLabels[formData.tipoEvento] || 'Não informado'}
          </p>
        </div>
      ),
      stepNumber: 2,
    },
    {
      icon: Users,
      title: 'Quantidade de Pessoas',
      content: (
        <div className="space-y-1">
          <p>
            <span className="font-medium">Convidados:</span> {formData.quantidadePessoas || 0}{' '}
            pessoas
          </p>
        </div>
      ),
      stepNumber: 3,
    },
    {
      icon: MessageSquare,
      title: 'Observações Adicionais',
      content: (
        <div className="space-y-1">
          {formData.observacoes ? (
            <p className="text-sm leading-relaxed">{formData.observacoes}</p>
          ) : (
            <p className="text-gray-500 italic">Nenhuma observação adicionada</p>
          )}
        </div>
      ),
      stepNumber: 4,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Revisar Informações</h3>
        <p className="text-gray-600">Confira todos os detalhes antes de enviar sua reserva</p>
      </div>

      <div className="space-y-4">
        {summaryItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    {item.content}
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => goToStep(item.stepNumber)}
                  className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 flex items-center gap-1"
                >
                  <Edit className="w-4 h-4" />
                  Editar
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-900 mb-2">Próximos Passos</h4>
            <div className="text-sm text-amber-800 space-y-2">
              <p>• Nossa equipe entrará em contato em até 24 horas para confirmar sua reserva</p>
              <p>• Discutiremos todos os detalhes e personalizações do seu evento</p>
              <p>• Enviaremos um contrato com todas as informações e valores</p>
              <p>• Você pode entrar em contato conosco pelo WhatsApp para dúvidas urgentes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Sítio Nosso Lugar</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>📍 Localização privilegiada na natureza</p>
              <p>🏞️ Ambiente completo para eventos especiais</p>
              <p>🚗 Estacionamento amplo disponível</p>
              <p>📞 Atendimento personalizado para cada evento</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-700 font-medium">
              Ao enviar esta reserva, você concorda com nossos termos de uso e política de
              privacidade.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Seus dados serão utilizados apenas para processar sua reserva e entrar em contato
              quando necessário.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSummary;
