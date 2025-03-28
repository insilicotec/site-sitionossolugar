
import { useState, ChangeEvent, FormEvent } from 'react';
import { Calendar } from '@/components/ui/calendar';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

export interface ReservationData {
  nome: string;
  sobrenome: string;
  cidade: string;
  dataEvento: Date | undefined;
  tipoEvento: string;
  apenasLocal: boolean;
  incluiComida: boolean;
  buffet: boolean;
  dj: boolean;
  decoracao: boolean;
  observacoes: string;
}

const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  const [formData, setFormData] = useState<ReservationData>({
    nome: '',
    sobrenome: '',
    cidade: '',
    dataEvento: undefined,
    tipoEvento: '',
    apenasLocal: false,
    incluiComida: false,
    buffet: false,
    dj: false,
    decoracao: false,
    observacoes: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData({ ...formData, dataEvento: date });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            name="nome"
            render={() => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input 
                    name="nome" 
                    value={formData.nome} 
                    onChange={handleInputChange} 
                    placeholder="Seu nome" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="sobrenome"
            render={() => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input 
                    name="sobrenome" 
                    value={formData.sobrenome} 
                    onChange={handleInputChange} 
                    placeholder="Seu sobrenome" 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="cidade"
          render={() => (
            <FormItem>
              <FormLabel>Cidade onde reside</FormLabel>
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

        <FormField
          name="dataEvento"
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel>Data do Evento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !formData.dataEvento && "text-muted-foreground"
                      )}
                    >
                      {formData.dataEvento ? (
                        format(formData.dataEvento, "PPP", { locale: ptBR })
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.dataEvento}
                    onSelect={handleDateChange}
                    initialFocus
                    locale={ptBR}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="tipoEvento"
          render={() => (
            <FormItem>
              <FormLabel>Tipo de Evento</FormLabel>
              <Select 
                onValueChange={(value) => handleSelectChange('tipoEvento', value)}
                defaultValue={formData.tipoEvento}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="casamento">Casamento</SelectItem>
                  <SelectItem value="aniversario">Aniversário</SelectItem>
                  <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Opções de Serviço</FormLabel>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="apenasLocal"
              render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={formData.apenasLocal}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('apenasLocal', checked as boolean)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Apenas o local</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              name="incluiComida"
              render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={formData.incluiComida}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('incluiComida', checked as boolean)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Inclui comida</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              name="buffet"
              render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={formData.buffet}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('buffet', checked as boolean)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Buffet completo</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              name="dj"
              render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={formData.dj}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('dj', checked as boolean)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>DJ</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              name="decoracao"
              render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={formData.decoracao}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('decoracao', checked as boolean)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Decoração</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          name="observacoes"
          render={() => (
            <FormItem>
              <FormLabel>Observações Adicionais</FormLabel>
              <FormControl>
                <Textarea 
                  name="observacoes" 
                  value={formData.observacoes} 
                  onChange={handleInputChange} 
                  placeholder="Detalhes adicionais sobre seu evento..." 
                  rows={4}
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

export default ReservationForm;
