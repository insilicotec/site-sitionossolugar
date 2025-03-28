
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
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

interface PartnershipFormProps {
  onSubmit: (data: PartnershipData) => void;
}

export interface PartnershipData {
  nomeAgencia: string;
  responsavel: string;
  telefone: string;
  email: string;
  cidade: string;
  website: string;
  descricao: string;
}

// Create a schema for form validation
const formSchema = z.object({
  nomeAgencia: z.string().min(2, "Nome da agência é obrigatório"),
  responsavel: z.string().min(2, "Nome do responsável é obrigatório"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  website: z.string().optional(),
  descricao: z.string().min(10, "Por favor, descreva como deseja formar parceria")
});

const PartnershipForm = ({ onSubmit }: PartnershipFormProps) => {
  // Initialize react-hook-form with zod resolver
  const form = useForm<PartnershipData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeAgencia: '',
      responsavel: '',
      telefone: '',
      email: '',
      cidade: '',
      website: '',
      descricao: '',
    }
  });

  // Handle form submission
  const handleSubmit = (data: PartnershipData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nomeAgencia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Agência</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Nome da sua agência"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="responsavel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Responsável</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(00) 00000-0000"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cidade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Sua cidade"
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
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website ou Rede Social</FormLabel>
              <FormControl>
                <Input 
                  placeholder="https://www.seusite.com"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Como deseja formar parceria?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva como gostaria de formar parceria conosco..." 
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-sitio-green-dark hover:bg-sitio-earth text-white"
        >
          Enviar para WhatsApp
        </Button>
      </form>
    </Form>
  );
};

export default PartnershipForm;
