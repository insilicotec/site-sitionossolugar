
import { useState, useEffect } from 'react';
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
  
  // Reset buffet when changing event type to day use
  useEffect(() => {
    if (isDayUse) {
      form.setValue('buffet', false);
    }
  }, [isDayUse, form]);

  return (
    <div className="space-y-4">
      <FormLabel>Opções de Serviço</FormLabel>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sitio-blue-light/30 p-4 rounded-lg">
        {/* Apenas o local */}
        <FormField
          control={form.control}
          name="apenasLocal"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true);
                  }}
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">Apenas o local</FormLabel>
              </div>
            </FormItem>
          )}
        />

        {/* Inclui comida */}
        <FormField
          control={form.control}
          name="incluiComida"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true);
                  }}
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">Inclui comida</FormLabel>
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
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked === true);
                    }}
                    className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">Buffet completo</FormLabel>
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
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true);
                  }}
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">DJ</FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        {/* Decoração option */}
        <FormField
          control={form.control}
          name="decoracao"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true);
                  }}
                  className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">Decoração</FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceOptionsFields;
