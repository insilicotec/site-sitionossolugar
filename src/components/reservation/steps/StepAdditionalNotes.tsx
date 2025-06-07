import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ReservationData } from '../types';

interface StepAdditionalNotesProps {
  form: UseFormReturn<ReservationData>;
}

const quickSuggestions = [
  'Decoração',
  'Música ao vivo',
  'Horário noturno',
  'Fotos profissionais',
  'Cerimônia religiosa',
  'Festa infantil',
  'Evento corporativo',
  'Espaço para dança'
];

const StepAdditionalNotes = ({ form }: StepAdditionalNotesProps) => {
  const currentNotes = form.watch('observacoes') || '';

  const addSuggestion = (suggestion: string) => {
    const current = form.getValues('observacoes') || '';
    const newValue = current ? `${current}\n• ${suggestion}` : `• ${suggestion}`;
    form.setValue('observacoes', newValue);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Observações Adicionais</h3>
        <p className="text-gray-600">
          Compartilhe detalhes especiais para tornarmos seu evento único
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Esta etapa é opcional, mas nos ajuda a personalizar melhor sua experiência
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="observacoes"
          render={({ field }) => (            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Detalhes do seu evento (opcional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte-nos sobre suas preferências, necessidades especiais, decoração desejada, horários específicos, restrições alimentares, ou qualquer outro detalhe importante para seu evento..."
                  className="min-h-[120px] border-gray-200 focus:border-amber-500 focus:ring-amber-500 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <p className="text-xs text-gray-500 mt-1">
                {currentNotes.length}/500 caracteres
              </p>
            </FormItem>
          )}
        />        {/* Quick Suggestions */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700">Sugestões rápidas:</h4>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-amber-50 hover:border-amber-300 transition-colors"
                onClick={() => addSuggestion(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepAdditionalNotes;
