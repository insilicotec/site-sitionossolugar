
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
                  className={`flex items-center space-x-2 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <div className={`flex-shrink-0 h-5 w-5 border rounded-sm ${
                    field.value ? "bg-sitio-green-dark border-sitio-green-dark" : "border-gray-300"
                  } flex items-center justify-center`}>
                    {field.value && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <FormLabel className="cursor-pointer w-full font-medium">
                    Apenas o local
                  </FormLabel>
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
                  className={`flex items-center space-x-2 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <div className={`flex-shrink-0 h-5 w-5 border rounded-sm ${
                    field.value ? "bg-sitio-green-dark border-sitio-green-dark" : "border-gray-300"
                  } flex items-center justify-center`}>
                    {field.value && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <FormLabel className="cursor-pointer w-full font-medium">
                    Inclui comida
                  </FormLabel>
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
                    className={`flex items-center space-x-2 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                      field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark" : ""
                    }`}
                    onClick={() => field.onChange(!field.value)}
                  >
                    <div className={`flex-shrink-0 h-5 w-5 border rounded-sm ${
                      field.value ? "bg-sitio-green-dark border-sitio-green-dark" : "border-gray-300"
                    } flex items-center justify-center`}>
                      {field.value && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <FormLabel className="cursor-pointer w-full font-medium">
                      Buffet completo
                    </FormLabel>
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
                  className={`flex items-center space-x-2 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <div className={`flex-shrink-0 h-5 w-5 border rounded-sm ${
                    field.value ? "bg-sitio-green-dark border-sitio-green-dark" : "border-gray-300"
                  } flex items-center justify-center`}>
                    {field.value && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <FormLabel className="cursor-pointer w-full font-medium">
                    DJ
                  </FormLabel>
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
                  className={`flex items-center space-x-2 rounded-md border p-3 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <div className={`flex-shrink-0 h-5 w-5 border rounded-sm ${
                    field.value ? "bg-sitio-green-dark border-sitio-green-dark" : "border-gray-300"
                  } flex items-center justify-center`}>
                    {field.value && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <FormLabel className="cursor-pointer w-full font-medium">
                    Decoração
                  </FormLabel>
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
