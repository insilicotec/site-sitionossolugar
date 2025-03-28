
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Checkbox } from '@/components/ui/checkbox';
import { UseFormReturn, useWatch } from "react-hook-form";
import { ReservationData } from "./types";

interface ServiceOptionsFieldsProps {
  form: UseFormReturn<ReservationData>;
}

const ServiceOptionsFields = ({ form }: ServiceOptionsFieldsProps) => {
  // Watch tipoEvento to show/hide buffet option
  const tipoEvento = useWatch({
    control: form.control,
    name: 'tipoEvento',
  });
  
  const isDayUse = tipoEvento === 'dayuse';
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sitio-green-dark">Opções de Serviço</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sitio-blue-light/30 p-4 rounded-lg">
        {/* Apenas o local */}
        <FormField
          control={form.control}
          name="apenasLocal"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="apenasLocal"
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  htmlFor="apenasLocal" 
                  className="font-medium cursor-pointer"
                  onClick={() => field.onChange(!field.value)}
                >
                  Apenas o local
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        {/* Inclui comida */}
        <FormField
          control={form.control}
          name="incluiComida"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="incluiComida"
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  htmlFor="incluiComida" 
                  className="font-medium cursor-pointer"
                  onClick={() => field.onChange(!field.value)}
                >
                  Inclui comida
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        {/* Buffet completo - only shown if not a day use event */}
        {!isDayUse && (
          <FormField
            control={form.control}
            name="buffet"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="buffet"
                    className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                  />
                </FormControl>
                <div className="w-full space-y-1">
                  <FormLabel 
                    htmlFor="buffet" 
                    className="font-medium cursor-pointer"
                    onClick={() => field.onChange(!field.value)}
                  >
                    Buffet completo
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        )}
        
        {/* DJ option */}
        <FormField
          control={form.control}
          name="dj"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="dj"
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  htmlFor="dj" 
                  className="font-medium cursor-pointer"
                  onClick={() => field.onChange(!field.value)}
                >
                  DJ
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        {/* Decoração option */}
        <FormField
          control={form.control}
          name="decoracao"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="decoracao"
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  htmlFor="decoracao" 
                  className="font-medium cursor-pointer"
                  onClick={() => field.onChange(!field.value)}
                >
                  Decoração
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceOptionsFields;
