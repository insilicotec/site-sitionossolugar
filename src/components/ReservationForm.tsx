
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
  sobrenome: string;
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
  nome: z.string().min(2, "Nome é obrigatório"),
  sobrenome: z.string().min(2, "Sobrenome é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  dataEvento: z.date().optional(),
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
      sobrenome: '',
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
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome"
                    {...field} 
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sobrenome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu sobrenome"
                    {...field} 
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <div className="space-y-4">
          <FormLabel>Opções de Serviço</FormLabel>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sitio-sand/30 p-4 rounded-lg">
            <FormField
              control={form.control}
              name="apenasLocal"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Apenas o local</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="incluiComida"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Inclui comida</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            {!isDayUse && (
              <FormField
                control={form.control}
                name="buffet"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Buffet completo</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="dj"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>DJ</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="decoracao"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-sitio-green-dark data-[state=checked]:border-sitio-green-dark"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Decoração</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

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

        <Button 
          type="submit" 
          className="w-full bg-sitio-green-dark hover:bg-sitio-earth text-white transition-all transform hover:scale-[1.02] shadow-md"
        >
          Enviar para WhatsApp
        </Button>
      </form>
    </Form>
  );
};

export default ReservationForm;
