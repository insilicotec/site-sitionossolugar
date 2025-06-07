
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";
import { Check } from "lucide-react";

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
            <FormItem>
              <FormControl>
                <div 
                  className={`
                    relative flex items-center justify-center rounded-lg border p-4 
                    cursor-pointer transition-all duration-300 ease-in-out group
                    ${field.value 
                      ? "bg-nature-100/70 border-nature-400 ring-2 ring-nature-300" 
                      : "bg-white hover:bg-nature-50/50 border-gray-200 hover:border-nature-300"}
                  `}
                  onClick={() => field.onChange(!field.value)}
                  role="checkbox"
                  aria-checked={field.value}
                  aria-label="Apenas o local"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      field.onChange(!field.value);
                    }
                  }}
                >
                  <FormLabel className="cursor-pointer text-center font-medium text-gray-700 group-hover:text-nature-600">
                    Apenas o local
                  </FormLabel>
                  {field.value && (
                    <Check 
                      className="absolute top-2 right-2 text-nature-500 
                      transition-transform duration-300 ease-in-out 
                      scale-100 group-hover:scale-110"
                      size={20} 
                    />
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Inclui comida */}
        <FormField
          control={form.control}
          name="incluiComida"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div 
                  className={`
                    relative flex items-center justify-center rounded-lg border p-4 
                    cursor-pointer transition-all duration-300 ease-in-out group
                    ${field.value 
                      ? "bg-nature-100/70 border-nature-400 ring-2 ring-nature-300" 
                      : "bg-white hover:bg-nature-50/50 border-gray-200 hover:border-nature-300"}
                  `}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium text-gray-700 group-hover:text-nature-600">
                    Inclui comida
                  </FormLabel>
                  {field.value && (
                    <Check 
                      className="absolute top-2 right-2 text-nature-500 
                      transition-transform duration-300 ease-in-out 
                      scale-100 group-hover:scale-110"
                      size={20} 
                    />
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        {/* Buffet completo */}
        {!isDayUse && (
          <FormField
            control={form.control}
            name="buffet"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div 
                    className={`
                      relative flex items-center justify-center rounded-lg border p-4 
                      cursor-pointer transition-all duration-300 ease-in-out group
                      ${field.value 
                        ? "bg-nature-100/70 border-nature-400 ring-2 ring-nature-300" 
                        : "bg-white hover:bg-nature-50/50 border-gray-200 hover:border-nature-300"}
                    `}
                    onClick={() => field.onChange(!field.value)}
                  >
                    <FormLabel className="cursor-pointer text-center font-medium text-gray-700 group-hover:text-nature-600">
                      Buffet completo
                    </FormLabel>
                    {field.value && (
                      <Check 
                        className="absolute top-2 right-2 text-nature-500 
                        transition-transform duration-300 ease-in-out 
                        scale-100 group-hover:scale-110"
                        size={20} 
                      />
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        )}
        
        {/* DJ option */}
        <FormField
          control={form.control}
          name="dj"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div 
                  className={`
                    relative flex items-center justify-center rounded-lg border p-4 
                    cursor-pointer transition-all duration-300 ease-in-out group
                    ${field.value 
                      ? "bg-nature-100/70 border-nature-400 ring-2 ring-nature-300" 
                      : "bg-white hover:bg-nature-50/50 border-gray-200 hover:border-nature-300"}
                  `}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium text-gray-700 group-hover:text-nature-600">
                    DJ
                  </FormLabel>
                  {field.value && (
                    <Check 
                      className="absolute top-2 right-2 text-nature-500 
                      transition-transform duration-300 ease-in-out 
                      scale-100 group-hover:scale-110"
                      size={20} 
                    />
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        {/* Decoração option */}
        <FormField
          control={form.control}
          name="decoracao"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div 
                  className={`
                    relative flex items-center justify-center rounded-lg border p-4 
                    cursor-pointer transition-all duration-300 ease-in-out group
                    ${field.value 
                      ? "bg-nature-100/70 border-nature-400 ring-2 ring-nature-300" 
                      : "bg-white hover:bg-nature-50/50 border-gray-200 hover:border-nature-300"}
                  `}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium text-gray-700 group-hover:text-nature-600">
                    Decoração
                  </FormLabel>
                  {field.value && (
                    <Check 
                      className="absolute top-2 right-2 text-nature-500 
                      transition-transform duration-300 ease-in-out 
                      scale-100 group-hover:scale-110"
                      size={20} 
                    />
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceOptionsFields;
