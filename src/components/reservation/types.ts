
import { z } from "zod";

export interface ReservationData {
  nome: string;
  telefone: string;
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

// Create a schema for form validation
export const formSchema = z.object({
  nome: z.string().min(2, "Nome completo é obrigatório"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  dataEvento: z.date({
    required_error: "Por favor selecione uma data para o evento",
  }),
  tipoEvento: z.string().min(1, "Selecione o tipo de evento"),
  apenasLocal: z.boolean().default(false),
  incluiComida: z.boolean().default(false),
  buffet: z.boolean().default(false),
  dj: z.boolean().default(false),
  decoracao: z.boolean().default(false),
  observacoes: z.string().optional(),
});
