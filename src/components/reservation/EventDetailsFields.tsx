
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface EventDetailsFieldsProps {
  form: UseFormReturn<ReservationData>;
}

const EventDetailsFields = ({ form }: EventDetailsFieldsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sitio-green-dark">Detalhes do Evento</h3>
      
      {/* Data do Evento */}
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
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP", { locale: ptBR })
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                    <Calendar className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date()}
                  locale={ptBR}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Tipo de Evento */}
      <FormField
        control={form.control}
        name="tipoEvento"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Tipo de Evento</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="casamento" id="casamento" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="casamento"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Heart className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Casamento</span>
                  </FormLabel>
                </FormItem>
                
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="aniversario" id="aniversario" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="aniversario"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Calendar className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Aniversário</span>
                  </FormLabel>
                </FormItem>
                
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="corporativo" id="corporativo" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="corporativo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Users className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Evento Corporativo</span>
                  </FormLabel>
                </FormItem>
                
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="dayuse" id="dayuse" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="dayuse"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Palmtree className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Day Use</span>
                  </FormLabel>
                </FormItem>
                
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="pacoteFechado" id="pacoteFechado" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="pacoteFechado"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Calendar className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Pacote fechado (apenas o espaço)</span>
                  </FormLabel>
                </FormItem>
                
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="outro" id="outro" className="peer sr-only" />
                  </FormControl>
                  <FormLabel
                    htmlFor="outro"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-nature-500 peer-data-[state=checked]:bg-nature-50 [&:has([data-state=checked])]:border-nature-500 cursor-pointer"
                  >
                    <Calendar className="mb-2 h-6 w-6 text-nature-600" />
                    <span className="text-sm font-medium">Outro</span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EventDetailsFields;
