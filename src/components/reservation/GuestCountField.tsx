import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
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
              type="text"
              placeholder="Digite o número de pessoas"
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                // Only allow numbers
                if (value === '' || /^\d+$/.test(value)) {
                  const numValue = value === '' ? undefined : Number(value);
                  field.onChange(numValue);
                }
              }}
              value={field.value ? field.value.toString() : ''}
              className="border-sitio-green-dark/30 focus:border-sitio-green-dark [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GuestCountField;
