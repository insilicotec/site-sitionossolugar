
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
    try {
      const message = `Olá! Sou da empresa ${values.companyName}, do ramo de ${values.businessType}. Meu nome é ${values.contactName} e gostaria de conversar sobre uma parceria com o Sítio Nosso Lugar. ${values.message ? `Mensagem adicional: ${values.message}` : ""}`;
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
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Sua empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ramo de Atividade</FormLabel>
                <FormControl>
                  <Input placeholder="Seu ramo de negócio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Input placeholder="(XX) XXXXX-XXXX" {...field} />
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
            <FormItem>
              <FormLabel>Mensagem (Opcional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva sua proposta de parceria..." 
                  className="min-h-32 resize-y"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Conte-nos sobre sua ideia de parceria ou ativação com o Sítio Nosso Lugar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
          <MessageSquare className="mr-2 h-4 w-4" />
          Enviar Proposta via WhatsApp
        </Button>
      </form>
    </Form>
  );
}
