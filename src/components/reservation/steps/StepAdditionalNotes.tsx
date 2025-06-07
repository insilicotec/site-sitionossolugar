import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Lightbulb, Clock, Utensils, Music, Camera } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ReservationData } from '../types';

interface StepAdditionalNotesProps {
  form: UseFormReturn<ReservationData>;
}

const suggestionCategories = [
  {
    title: 'Decoração & Ambiente',
    icon: Lightbulb,
    suggestions: [
      'Decoração temática específica',
      'Cores preferenciais',
      'Arranjos florais especiais',
      'Iluminação personalizada'
    ]
  },
  {
    title: 'Horários & Cronograma',
    icon: Clock,
    suggestions: [
      'Horário de início da festa',
      'Duração prevista do evento',
      'Momentos especiais (cerimônia, corte do bolo)',
      'Preferências de música'
    ]
  },
  {
    title: 'Alimentação & Bebidas',
    icon: Utensils,
    suggestions: [
      'Restrições alimentares dos convidados',
      'Preferências do cardápio',
      'Bebidas especiais',
      'Horário das refeições'
    ]
  },
  {
    title: 'Entretenimento & Registro',
    icon: Music,
    suggestions: [
      'Tipo de música preferida',
      'Necessidades de som e microfone',
      'Espaço para dança',
      'Fotografia e filmagem'
    ]
  }
];

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
        />

        {/* Quick Suggestions */}
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

        {/* Suggestion Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestionCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <IconComponent className="w-5 h-5 text-amber-600" />
                  <h5 className="text-sm font-medium text-gray-800">{category.title}</h5>
                </div>
                <div className="space-y-1">
                  {category.suggestions.map((suggestion, suggestionIndex) => (
                    <button
                      key={suggestionIndex}
                      type="button"
                      onClick={() => addSuggestion(suggestion)}
                      className="block text-xs text-gray-600 hover:text-amber-600 transition-colors text-left"
                    >
                      • {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-start gap-3">
          <Camera className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-green-800 font-medium mb-1">
              Dica especial
            </p>
            <p className="text-sm text-green-700">
              Quanto mais detalhes você nos fornecer, melhor poderemos preparar seu evento. 
              Nossa equipe entrará em contato para alinhar todos os detalhes e garantir que tudo saia perfeito!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepAdditionalNotes;
