
import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  cidade: z.string().min(2, { message: "Cidade deve ser preenchida" }),
  dataEvento: z.date().optional(),
  tipoEvento: z.string(),
  apenasLocal: z.boolean().default(false),
  incluiComida: z.boolean().default(false),
  buffet: z.boolean().default(false),
  dj: z.boolean().default(false),
  decoracao: z.boolean().default(false),
  observacoes: z.string().optional(),
});

export type ReservationData = z.infer<typeof formSchema>;
