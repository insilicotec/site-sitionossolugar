import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { User, MapPin } from 'lucide-react';
import { ReservationData } from '../types';

interface StepPersonalInfoProps {
  form: UseFormReturn<ReservationData>;
}

const StepPersonalInfo = ({ form }: StepPersonalInfoProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Dados Pessoais</h3>
        <p className="text-gray-600">
          Vamos começar com suas informações básicas para processar sua reserva
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Nome *
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Digite seu nome"
                    className="pl-10 h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Cidade *
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Digite sua cidade"
                    className="pl-10 h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-sm text-amber-800 font-medium mb-1">
              Informações importantes
            </p>
            <p className="text-sm text-amber-700">
              Suas informações pessoais são utilizadas apenas para processar sua reserva e entrar em contato caso necessário.
              Não compartilhamos seus dados com terceiros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPersonalInfo;
