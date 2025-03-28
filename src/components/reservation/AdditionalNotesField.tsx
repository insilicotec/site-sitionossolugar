
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";

interface AdditionalNotesFieldProps {
  form: UseFormReturn<ReservationData>;
}

const AdditionalNotesField = ({ form }: AdditionalNotesFieldProps) => {
  return (
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
  );
};

export default AdditionalNotesField;
