
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

interface PartnershipFormProps {
  onSubmit: (data: PartnershipData) => void;
}

export interface PartnershipData {
  nomeAgencia: string;
  responsavel: string;
  telefone: string;
  cidade: string;
  website: string;
  descricao: string;
}

// Create a schema for form validation
const formSchema = z.object({
  nomeAgencia: z.string().min(2, "Nome da agência é obrigatório"),
  responsavel: z.string().min(2, "Nome do responsável é obrigatório"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
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
                  className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
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
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
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
                    className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                  className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  className="border-sitio-green-dark/30 focus:border-sitio-green-dark"
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
  );
};

export default PartnershipForm;
