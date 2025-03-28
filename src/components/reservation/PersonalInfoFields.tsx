
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ReservationData } from "./types";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<ReservationData>;
}

const PersonalInfoFields = ({ form }: PersonalInfoFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
    </>
  );
};

export default PersonalInfoFields;
