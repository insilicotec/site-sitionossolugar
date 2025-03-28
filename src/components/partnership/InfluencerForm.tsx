
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
import { Button } from "@/components/ui/button";

import { influencerFormSchema, InfluencerFormValues } from "./schemas";

export function InfluencerForm() {
  const form = useForm<InfluencerFormValues>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      socialHandle: "",
      name: "",
      city: "",
    },
  });

  const handleSubmit = (values: InfluencerFormValues) => {
    try {
      const message = `Olá! Sou ${values.name} de ${values.city}, meu @ é ${values.socialHandle}. Gostaria de conversar sobre uma parceria de influenciador com o Sítio Nosso Lugar.`;
      const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Proposta enviada!",
        description: "Você será redirecionado para o WhatsApp para concluir o envio.",
      });
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
        <FormField
          control={form.control}
          name="socialHandle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>@ do Instagram/TikTok</FormLabel>
              <FormControl>
                <Input placeholder="@seuhandle" {...field} />
              </FormControl>
              <FormDescription>
                Seu nome de usuário no Instagram ou TikTok.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Sua cidade" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
          <MessageSquare className="mr-2 h-4 w-4" />
          Enviar Proposta via WhatsApp
        </Button>
      </form>
    </Form>
  );
}
