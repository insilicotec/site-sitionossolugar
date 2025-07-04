
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, Instagram } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

import { influencerFormSchema, InfluencerFormValues } from "./schemas";

export function InfluencerForm() {
  const form = useForm<InfluencerFormValues>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      name: "",
      socialHandle: "",
      city: "",
      platform: "instagram",
    },
    mode: "onBlur"
  });
  const handleSubmit = (values: InfluencerFormValues) => {
    try {
      const platformText = values.platform === "instagram" ? "Instagram" : "TikTok";
      const message = `*PROPOSTA DE PARCERIA - INFLUENCIADOR*

*DADOS PESSOAIS*
• Nome: ${values.name}
• Handle: @${values.socialHandle}
• Cidade: ${values.city}

*PLATAFORMA PRINCIPAL*
• ${platformText}

Gostaria de conversar sobre uma parceria com o Sítio Nosso Lugar como criador de conteúdo!

Acredito que posso mostrar experiências autênticas em meio à natureza para meu público.`;
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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 sm:space-y-6">
        <div className="mb-4 sm:mb-6">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="pt-4 sm:pt-6">
              <p className="text-amber-800 text-sm sm:text-base">
                Somos uma opção exclusiva para criadores de conteúdo que desejam mostrar experiências autênticas. Compartilhe o Sítio Nosso Lugar com seu público!
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="socialHandle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>@</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">@</span>
                    <Input placeholder="seu_perfil" className="pl-7" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
          <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input placeholder="Sua cidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem className="space-y-3 col-span-full">
              <FormLabel>Principal Plataforma</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="instagram" id="instagram" />
                    <label
                      htmlFor="instagram"
                      className="flex items-center gap-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      <Instagram className="h-4 w-4" /> Instagram
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tiktok" id="tiktok" />
                    <label
                      htmlFor="tiktok"
                      className="flex items-center gap-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" /> TikTok
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}        />
        
        <Button 
          type="submit" 
          className="w-full sm:w-full md:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed py-3 px-4 text-sm sm:text-base" 
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
