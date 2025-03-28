
import { useState, ChangeEvent, FormEvent } from 'react';
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

const PartnershipForm = ({ onSubmit }: PartnershipFormProps) => {
  const [formData, setFormData] = useState<PartnershipData>({
    nomeAgencia: '',
    responsavel: '',
    telefone: '',
    email: '',
    cidade: '',
    website: '',
    descricao: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          name="nomeAgencia"
          render={() => (
            <FormItem>
              <FormLabel>Nome da Agência</FormLabel>
              <FormControl>
                <Input 
                  name="nomeAgencia" 
                  value={formData.nomeAgencia} 
                  onChange={handleInputChange} 
                  placeholder="Nome da sua agência" 
                  required 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            name="responsavel"
            render={() => (
              <FormItem>
                <FormLabel>Nome do Responsável</FormLabel>
                <FormControl>
                  <Input 
                    name="responsavel" 
                    value={formData.responsavel} 
                    onChange={handleInputChange} 
                    placeholder="Seu nome completo" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="telefone"
            render={() => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input 
                    name="telefone" 
                    value={formData.telefone} 
                    onChange={handleInputChange} 
                    placeholder="(00) 00000-0000" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            name="email"
            render={() => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input 
                    name="email" 
                    type="email"
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="seu@email.com" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="cidade"
            render={() => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input 
                    name="cidade" 
                    value={formData.cidade} 
                    onChange={handleInputChange} 
                    placeholder="Sua cidade" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="website"
          render={() => (
            <FormItem>
              <FormLabel>Website ou Rede Social</FormLabel>
              <FormControl>
                <Input 
                  name="website" 
                  value={formData.website} 
                  onChange={handleInputChange} 
                  placeholder="https://www.seusite.com" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="descricao"
          render={() => (
            <FormItem>
              <FormLabel>Como deseja formar parceria?</FormLabel>
              <FormControl>
                <Textarea 
                  name="descricao" 
                  value={formData.descricao} 
                  onChange={handleInputChange} 
                  placeholder="Descreva como gostaria de formar parceria conosco..." 
                  rows={4}
                  required
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
