import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Heart, Users, Briefcase, Gift, Camera } from 'lucide-react';
import { ReservationData } from '../types';

interface StepEventDetailsProps {
  form: UseFormReturn<ReservationData>;
}

const eventTypes = [
  { value: 'casamento', label: 'Casamento', icon: Heart, color: 'text-pink-500' },
  { value: 'aniversario', label: 'Aniversário', icon: Gift, color: 'text-purple-500' },
  { value: 'confraternizacao', label: 'Confraternização', icon: Users, color: 'text-blue-500' },
  { value: 'evento-corporativo', label: 'Evento Corporativo', icon: Briefcase, color: 'text-gray-500' },
  { value: 'ensaio-fotografico', label: 'Ensaio Fotográfico', icon: Camera, color: 'text-green-500' },
  { value: 'outros', label: 'Outros', icon: Calendar, color: 'text-amber-500' },
];

const StepEventDetails = ({ form }: StepEventDetailsProps) => {
  const selectedEventType = form.watch('tipoEvento');

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Detalhes do Evento</h3>
        <p className="text-gray-600">
          Conte-nos sobre o seu evento especial para prepararmos tudo com carinho
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="dataEvento"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Data do Evento *
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="date"
                    className="pl-10 h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    {...field}
                    value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                    onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tipoEvento"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Tipo do Evento *
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500">
                    <SelectValue placeholder="Selecione o tipo do evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {eventTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <IconComponent className={`w-4 h-4 ${type.color}`} />
                          {type.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {selectedEventType && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <div className="flex items-start gap-4">
            {(() => {
              const eventType = eventTypes.find(type => type.value === selectedEventType);
              if (eventType) {
                const IconComponent = eventType.icon;
                return <IconComponent className={`w-8 h-8 ${eventType.color} flex-shrink-0 mt-1`} />;
              }
              return null;
            })()}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {eventTypes.find(type => type.value === selectedEventType)?.label}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {selectedEventType === 'casamento' && 
                  "Tornamos seu dia especial ainda mais mágico com nossa infraestrutura completa e paisagem deslumbrante."}
                {selectedEventType === 'aniversario' && 
                  "Celebre mais um ano de vida em um ambiente acolhedor e cheio de natureza."}
                {selectedEventType === 'confraternizacao' && 
                  "Reúna amigos e familiares em um espaço perfeito para momentos de união e alegria."}
                {selectedEventType === 'evento-corporativo' && 
                  "Realize seu evento empresarial em um ambiente único que inspira criatividade e networking."}
                {selectedEventType === 'ensaio-fotografico' && 
                  "Capture momentos únicos em cenários naturais deslumbrantes."}
                {selectedEventType === 'outros' && 
                  "Qualquer que seja sua ocasião especial, oferecemos o espaço perfeito para realizá-la."}
              </p>
            </div>
          </div>        </div>
      )}

    </div>
  );
};

export default StepEventDetails;
