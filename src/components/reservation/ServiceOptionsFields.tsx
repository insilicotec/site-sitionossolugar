
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
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
            <FormItem>
              <FormControl>
                <div 
                  className={`flex items-center justify-center rounded-md border p-4 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark bg-green-100/60 backdrop-blur-sm" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium m-0">
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
                  className={`flex items-center justify-center rounded-md border p-4 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark bg-green-100/60 backdrop-blur-sm" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium m-0">
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
                    className={`flex items-center justify-center rounded-md border p-4 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                      field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark bg-green-100/60 backdrop-blur-sm" : ""
                    }`}
                    onClick={() => field.onChange(!field.value)}
                  >
                    <FormLabel className="cursor-pointer text-center font-medium m-0">
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
                  className={`flex items-center justify-center rounded-md border p-4 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark bg-green-100/60 backdrop-blur-sm" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium m-0">
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
                  className={`flex items-center justify-center rounded-md border p-4 shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition-all ${
                    field.value ? "border-sitio-green-dark ring-1 ring-sitio-green-dark bg-green-100/60 backdrop-blur-sm" : ""
                  }`}
                  onClick={() => field.onChange(!field.value)}
                >
                  <FormLabel className="cursor-pointer text-center font-medium m-0">
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
