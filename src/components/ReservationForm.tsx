
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

export interface ReservationData {
  nome: string;
  telefone: string;
  cidade: string;
  dataEvento: Date | undefined;
  tipoEvento: string;
  apenasLocal: boolean;
  incluiComida: boolean;
  buffet: boolean;
  dj: boolean;
  decoracao: boolean;
  observacoes: string;
}

// Create a schema for form validation
const formSchema = z.object({
  nome: z.string().min(2, "Nome completo é obrigatório"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  dataEvento: z.date({
    required_error: "Por favor selecione uma data para o evento",
  }),
  tipoEvento: z.string().min(1, "Selecione o tipo de evento"),
  apenasLocal: z.boolean().default(false),
  incluiComida: z.boolean().default(false),
  buffet: z.boolean().default(false),
  dj: z.boolean().default(false),
  decoracao: z.boolean().default(false),
  observacoes: z.string().optional(),
});

const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  // Initialize react-hook-form with zod resolver
  const form = useForm<ReservationData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      cidade: '',
      dataEvento: undefined,
      tipoEvento: '',
      apenasLocal: false,
      incluiComida: false,
      buffet: false,
      dj: false,
      decoracao: false,
      observacoes: '',
    }
  });

  // Watch tipoEvento to show/hide buffet option
  const tipoEvento = form.watch('tipoEvento');
  const isDayUse = tipoEvento === 'dayuse';
  
  // Reset buffet when changing event type to day use
  useEffect(() => {
    if (isDayUse) {
      form.setValue('buffet', false);
    }
  }, [isDayUse, form]);

  // Handle form submission
  const handleSubmit = (data: ReservationData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome Field */}
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo"
                    {...field} 
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefone Field */}
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone/WhatsApp</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu telefone com DDD"
                    {...field} 
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Cidade Field */}
        <FormField
          control={form.control}
          name="cidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade onde reside</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Sua cidade"
                  {...field} 
                  className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data do Evento Field */}
          <FormField
            control={form.control}
            name="dataEvento"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data do Evento</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal border-sitio-green-dark/30 hover:border-sitio-green-dark",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      locale={ptBR}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipo de Evento Field */}
          <FormField
            control={form.control}
            name="tipoEvento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Evento</FormLabel>
                <Select 
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-sitio-green-dark/30 focus:border-sitio-green-dark">
                      <SelectValue placeholder="Selecione o tipo de evento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="casamento">Casamento</SelectItem>
                    <SelectItem value="aniversario">Aniversário</SelectItem>
                    <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="dayuse">Day Use</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Opções de Serviço Section - Fixed checkbox implementation */}
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

        {/* Observações Field */}
        <FormField
          control={form.control}
          name="observacoes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações Adicionais</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Detalhes adicionais sobre seu evento..." 
                  rows={4}
                  {...field}
                  className="border-sitio-green-dark/30 focus:border-sitio-green-dark resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-sitio-green-dark hover:bg-sitio-accent text-white transition-all transform hover:scale-[1.02] shadow-md"
        >
          Enviar para WhatsApp
        </Button>
      </form>
    </Form>
  );
};

export default ReservationForm;
