import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Users, Minus, Plus, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReservationData } from '../types';

interface StepGuestCountProps {
  form: UseFormReturn<ReservationData>;
}

const StepGuestCount = ({ form }: StepGuestCountProps) => {
  const currentCount = form.watch('quantidadePessoas') || 0;
    const incrementCount = () => {
    const current = form.getValues('quantidadePessoas') || 1;
    if (current < 200) {
      form.setValue('quantidadePessoas', current + 1, { shouldValidate: true });
    }
  };

  const decrementCount = () => {
    const current = form.getValues('quantidadePessoas') || 1;
    if (current > 1) {
      form.setValue('quantidadePessoas', current - 1, { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quantidade de Pessoas</h3>
        <p className="text-gray-600">
          Quantos convidados participarão do seu evento?
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="quantidadePessoas"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Número de Convidados *
              </FormLabel>
              <FormControl>
                <div className="flex items-center justify-center space-x-4">                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={decrementCount}
                    disabled={(currentCount || 1) <= 1}
                    className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                    <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      min="1"
                      max="200"
                      placeholder="Ex: 50"
                      className="w-28 h-12 text-center text-lg font-bold border-2 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                      {...field}
                      value={field.value || ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        
                        // Allow empty string for clearing
                        if (value === '') {
                          field.onChange(undefined);
                          return;
                        }
                        
                        const numValue = parseInt(value);
                        
                        // Allow any number input, validate on blur or form submission
                        if (!isNaN(numValue) && numValue >= 0) {
                          field.onChange(numValue);
                        }
                      }}
                      onBlur={(e) => {
                        const value = parseInt(e.target.value);
                        
                        // Set to minimum if empty or invalid on blur
                        if (isNaN(value) || value < 1) {
                          field.onChange(1);
                        } else if (value > 200) {
                          field.onChange(200);
                        }
                      }}
                    />
                    <span className="text-gray-500 text-sm">pessoas</span>
                  </div>
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={incrementCount}
                    disabled={currentCount >= 200}
                    className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-indigo-800 font-medium mb-1">
              Informações sobre capacidade
            </p>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Infraestrutura completa para eventos de todos os tamanhos</li>
              <li>• Área coberta e ao ar livre disponível</li>
              <li>• Estacionamento amplo para todos os convidados</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepGuestCount;
