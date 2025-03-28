
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Building2, Instagram, MessageSquare } from "lucide-react";

// We use the MessageSquare icon as a replacement for TikTok

const companyFormSchema = z.object({
  companyName: z.string().min(3, {
    message: "O nome da empresa deve ter pelo menos 3 caracteres.",
  }),
  contactName: z.string().min(3, {
    message: "O nome do contato deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, forneça um email válido.",
  }),
  phoneNumber: z.string().min(10, {
    message: "O número de telefone deve ter pelo menos 10 dígitos.",
  }),
  businessType: z.string().min(3, {
    message: "O tipo de negócio deve ter pelo menos 3 caracteres.",
  }),
  message: z.string().optional(),
});

const influencerFormSchema = z.object({
  socialHandle: z.string().min(2, {
    message: "O @ do Instagram/TikTok deve ter pelo menos 2 caracteres.",
  }),
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  city: z.string().min(3, {
    message: "A cidade deve ter pelo menos 3 caracteres.",
  }),
});

export function PartnershipForm() {
  const [activeTab, setActiveTab] = useState("company");

  const companyForm = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phoneNumber: "",
      businessType: "",
      message: "",
    },
  });

  const influencerForm = useForm<z.infer<typeof influencerFormSchema>>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      socialHandle: "",
      name: "",
      city: "",
    },
  });

  const handleCompanySubmit = (values: z.infer<typeof companyFormSchema>) => {
    const message = `Olá! Sou da empresa ${values.companyName}, do ramo de ${values.businessType}. Meu nome é ${values.contactName} e gostaria de conversar sobre uma parceria com o Sítio Nosso Lugar. ${values.message ? `Mensagem adicional: ${values.message}` : ""}`;
    const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInfluencerSubmit = (values: z.infer<typeof influencerFormSchema>) => {
    const message = `Olá! Sou ${values.name} de ${values.city}, meu @ é ${values.socialHandle}. Gostaria de conversar sobre uma parceria de influenciador com o Sítio Nosso Lugar.`;
    const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-md">
      <Tabs defaultValue="company" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="company" className="text-center py-3">
            <Building2 className="w-4 h-4 mr-2" />
            Empresas
          </TabsTrigger>
          <TabsTrigger value="influencer" className="text-center py-3">
            <Instagram className="w-4 h-4 mr-2" />
            Influenciadores
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company">
          <Form {...companyForm}>
            <form onSubmit={companyForm.handleSubmit(handleCompanySubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={companyForm.control}
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
                  control={companyForm.control}
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
                  control={companyForm.control}
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
                  control={companyForm.control}
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
                control={companyForm.control}
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
                control={companyForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva sua proposta de parceria..." 
                        className="min-h-32"
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
        </TabsContent>
        
        <TabsContent value="influencer">
          <Form {...influencerForm}>
            <form onSubmit={influencerForm.handleSubmit(handleInfluencerSubmit)} className="space-y-6">
              <FormField
                control={influencerForm.control}
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
                  control={influencerForm.control}
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
                  control={influencerForm.control}
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
