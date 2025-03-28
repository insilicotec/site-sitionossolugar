
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Checkbox } from '@/components/ui/checkbox';
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";

interface ServiceOptionsFieldsProps {
  form: UseFormReturn<ReservationData>;
}

const ServiceOptionsFields = ({ form }: ServiceOptionsFieldsProps) => {
  const tipoEvento = form.watch('tipoEvento');
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
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                  id={`checkbox-apenas-local`}
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  className="font-medium cursor-pointer"
                  htmlFor={`checkbox-apenas-local`}
                >
                  Apenas o local
                  {field.value && <span className="ml-2 text-sitio-green-dark">✓</span>}
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
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                  id={`checkbox-inclui-comida`}
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  className="font-medium cursor-pointer"
                  htmlFor={`checkbox-inclui-comida`}
                >
                  Inclui comida
                  {field.value && <span className="ml-2 text-sitio-green-dark">✓</span>}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        {/* Buffet completo */}
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
                    className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                    id={`checkbox-buffet`}
                  />
                </FormControl>
                <div className="w-full space-y-1">
                  <FormLabel 
                    className="font-medium cursor-pointer"
                    htmlFor={`checkbox-buffet`}
                  >
                    Buffet completo
                    {field.value && <span className="ml-2 text-sitio-green-dark">✓</span>}
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
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                  id={`checkbox-dj`}
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  className="font-medium cursor-pointer"
                  htmlFor={`checkbox-dj`}
                >
                  DJ
                  {field.value && <span className="ml-2 text-sitio-green-dark">✓</span>}
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
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark mt-1"
                  id={`checkbox-decoracao`}
                />
              </FormControl>
              <div className="w-full space-y-1">
                <FormLabel 
                  className="font-medium cursor-pointer"
                  htmlFor={`checkbox-decoracao`}
                >
                  Decoração
                  {field.value && <span className="ml-2 text-sitio-green-dark">✓</span>}
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
