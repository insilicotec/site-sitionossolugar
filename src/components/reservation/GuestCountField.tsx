import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";
import { Users } from "lucide-react";

interface GuestCountFieldProps {
  form: UseFormReturn<ReservationData>;
}

const GuestCountField = ({ form }: GuestCountFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="quantidadePessoas"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Quantidade de Pessoas
          </FormLabel>
          <FormControl>
            <Input 
              type="number"
              placeholder="Ex: 50"
              min="1"
              max="200"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
            />
          </FormControl>
          <FormDescription>
            Informe o número estimado de convidados para seu evento (mínimo: 1, máximo: 200)
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GuestCountField;
