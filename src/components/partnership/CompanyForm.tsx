
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { companyFormSchema, CompanyFormValues } from "./schemas";

export function CompanyForm() {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phoneNumber: "",
      businessType: "",
      message: "",
    },
    mode: "onBlur"
  });
  const handleSubmit = (values: CompanyFormValues) => {
    try {      const message = `🤝 *PROPOSTA DE PARCERIA - AGÊNCIA DE TURISMO* ✈️

🏢 *DADOS DA AGÊNCIA*
• Nome: ${values.companyName}
• Quantidade usual de pessoas: ${values.businessType}

👤 *CONTATO*
• Nome: ${values.contactName}
• Email: ${values.email}
• Telefone: ${values.phoneNumber}

${values.message ? `💭 *PROPOSTA DE PARCERIA*\n${values.message}\n\n` : ""}🌿 Gostaria de incluir o Sítio Nosso Lugar em nossos pacotes turísticos!

✈️ Acreditamos que podemos oferecer experiências únicas aos nossos clientes em meio à natureza.`;
      const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Proposta enviada!",
        description: "Você será redirecionado para o WhatsApp para concluir o envio.",
      });
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
      toast({
        title: "Erro ao enviar proposta",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 sm:space-y-6">
        <div className="mb-4 sm:mb-6">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="pt-4 sm:pt-6">
              <p className="text-amber-800 text-sm sm:text-base">
                Oferecemos condições especiais para agências que desejam incluir nosso espaço em seus pacotes turísticos. Temos estrutura completa para grupos, day use, eventos e experiências na natureza.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>                <FormLabel>Nome da Agência</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da sua agência de turismo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>                <FormLabel>Quantidade de Pessoas</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a quantidade usual" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1 a 10 pessoas</SelectItem>
                    <SelectItem value="11-20">11 a 20 pessoas</SelectItem>
                    <SelectItem value="21-30">21 a 30 pessoas</SelectItem>
                    <SelectItem value="31-50">31 a 50 pessoas</SelectItem>
                    <SelectItem value="51-100">51 a 100 pessoas</SelectItem>
                    <SelectItem value="100+">Mais de 100 pessoas</SelectItem>
                    <SelectItem value="variavel">Quantidade variável</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Contato</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(XX) XXXXX-XXXX" 
                    type="tel"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>              <FormLabel>Proposta de Parceria (Opcional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva como gostaria de incluir o Sítio Nosso Lugar em seus pacotes turísticos..." 
                  className="min-h-32 resize-y"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Conte-nos sobre seu interesse em oferecer nosso espaço aos seus clientes - day use, eventos, hospedagem, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button 
          type="submit" 
          className="w-full sm:w-full md:w-auto bg-amber-700 hover:bg-amber-800 text-white disabled:opacity-50 disabled:cursor-not-allowed py-3 px-4 text-sm sm:text-base" 
          disabled={form.formState.isSubmitting}
        >
          <MessageSquare className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{form.formState.isSubmitting ? "Enviando..." : "Enviar Proposta via WhatsApp"}</span>
          <span className="sm:hidden">{form.formState.isSubmitting ? "Enviando..." : "Enviar via WhatsApp"}</span>
        </Button>
      </form>
    </Form>
  );
}
