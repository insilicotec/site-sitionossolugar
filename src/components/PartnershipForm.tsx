
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PartnershipSubmitButton from './partnership/PartnershipSubmitButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Instagram, TikTok, Users2 } from 'lucide-react';

interface PartnershipFormProps {
  onSubmit: (data: PartnershipData | InfluencerData, type: PartnershipType) => void;
}

export type PartnershipType = 'business' | 'influencer';

export interface PartnershipData {
  nomeAgencia: string;
  responsavel: string;
  telefone: string;
  cidade: string;
  website: string;
  descricao: string;
}

export interface InfluencerData {
  nome: string;
  social: string;
  cidade: string;
  telefone: string;
  mensagem: string;
}

// Create schema for business partnerships
const businessFormSchema = z.object({
  nomeAgencia: z.string().min(2, "Nome da agência é obrigatório"),
  responsavel: z.string().min(2, "Nome do responsável é obrigatório"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  website: z.string().optional(),
  descricao: z.string().min(10, "Por favor, descreva como deseja formar parceria")
});

// Create schema for influencer partnerships
const influencerFormSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  social: z.string().min(1, "@ do Instagram/TikTok é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  mensagem: z.string().optional()
});

const PartnershipForm = ({ onSubmit }: PartnershipFormProps) => {
  const [partnershipType, setPartnershipType] = useState<PartnershipType>('business');

  // Initialize react-hook-form for business partnership
  const businessForm = useForm<PartnershipData>({
    resolver: zodResolver(businessFormSchema),
    defaultValues: {
      nomeAgencia: '',
      responsavel: '',
      telefone: '',
      cidade: '',
      website: '',
      descricao: '',
    }
  });

  // Initialize react-hook-form for influencer partnership
  const influencerForm = useForm<InfluencerData>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      nome: '',
      social: '',
      cidade: '',
      telefone: '',
      mensagem: '',
    }
  });

  // Handle business form submission
  const handleBusinessSubmit = (data: PartnershipData) => {
    onSubmit(data, 'business');
  };

  // Handle influencer form submission
  const handleInfluencerSubmit = (data: InfluencerData) => {
    onSubmit(data, 'influencer');
  };

  return (
    <Tabs 
      defaultValue="business" 
      className="w-full" 
      onValueChange={(value) => setPartnershipType(value as PartnershipType)}
    >
      <TabsList className="grid grid-cols-2 mb-8">
        <TabsTrigger value="business" className="flex items-center gap-2">
          <Users2 className="h-4 w-4" />
          <span>Agências e Negócios</span>
        </TabsTrigger>
        <TabsTrigger value="influencer" className="flex items-center gap-2">
          <Instagram className="h-4 w-4" />
          <span>Influenciadores</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="business">
        <Form {...businessForm}>
          <form onSubmit={businessForm.handleSubmit(handleBusinessSubmit)} className="space-y-6">
            <FormField
              control={businessForm.control}
              name="nomeAgencia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Agência</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Nome da sua agência"
                      {...field} 
                      className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={businessForm.control}
                name="responsavel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Responsável</FormLabel>
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

              <FormField
                control={businessForm.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(00) 00000-0000"
                        {...field} 
                        className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={businessForm.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
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

            <FormField
              control={businessForm.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website ou Rede Social</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://www.seusite.com"
                      {...field} 
                      className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={businessForm.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Como deseja formar parceria?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva como gostaria de formar parceria conosco..." 
                      rows={4}
                      {...field}
                      className="border-sitio-green-dark/30 focus:border-sitio-green-dark resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PartnershipSubmitButton />
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="influencer">
        <Form {...influencerForm}>
          <form onSubmit={influencerForm.handleSubmit(handleInfluencerSubmit)} className="space-y-6">
            <FormField
              control={influencerForm.control}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={influencerForm.control}
                name="social"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>@ do Instagram/TikTok</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">@</span>
                        <Input 
                          placeholder="seu_perfil"
                          {...field} 
                          className="pl-8 border-sitio-green-dark/30 focus:border-sitio-green-dark"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={influencerForm.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(00) 00000-0000"
                        {...field} 
                        className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={influencerForm.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
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

            <FormField
              control={influencerForm.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem (opcional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Conte-nos um pouco sobre o seu perfil, número de seguidores, tipo de conteúdo..." 
                      rows={4}
                      {...field}
                      className="border-sitio-green-dark/30 focus:border-sitio-green-dark resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PartnershipSubmitButton />
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
};

export default PartnershipForm;
