
import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  cidade: z.string().min(2, { message: "Cidade deve ser preenchida" }),
  dataEvento: z.date({ 
    required_error: "Data do evento é obrigatória",
    invalid_type_error: "Selecione uma data válida" 
  }),
  tipoEvento: z.string().min(1, { message: "Selecione o tipo de evento" }),
  quantidadePessoas: z.union([
    z.number().min(1, { message: "Mínimo de 1 pessoa" }).max(200, { message: "Máximo de 200 pessoas" }),
    z.undefined()
  ]).refine((val) => val !== undefined, { message: "Número de pessoas é obrigatório" }),
  observacoes: z.string().optional(),
});

export type ReservationData = z.infer<typeof formSchema>;
