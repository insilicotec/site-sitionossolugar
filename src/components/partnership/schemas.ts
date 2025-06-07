
import { z } from "zod";

export const companyFormSchema = z.object({
  companyName: z.string().min(3, {
    message: "O nome da empresa deve ter pelo menos 3 caracteres.",
  }),
  contactName: z.string().min(3, {
    message: "O nome do contato deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, forneça um email válido.",
  }),
  phoneNumber: z.string()
    .min(10, { message: "O número de telefone deve ter pelo menos 10 dígitos." })
    .regex(/^[\d\s\(\)\-\+]+$/, { message: "Formato de telefone inválido. Use apenas números, espaços, parênteses, hífen ou +." }),
  businessType: z.string().min(3, {
    message: "O tipo de negócio deve ter pelo menos 3 caracteres.",
  }),
  message: z.string().optional(),
});

export const influencerFormSchema = z.object({
  socialHandle: z.string()
    .min(2, { message: "O @ do Instagram/TikTok deve ter pelo menos 2 caracteres." })
    .max(30, { message: "O @ não pode ter mais de 30 caracteres." })
    .regex(/^[a-zA-Z0-9._]+$/, { message: "Use apenas letras, números, pontos e underscores." }),
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  city: z.string().min(3, {
    message: "A cidade deve ter pelo menos 3 caracteres.",
  }),
  platform: z.enum(["instagram", "tiktok"], {
    required_error: "Por favor, selecione uma plataforma principal.",
  }),
});

export type CompanyFormValues = z.infer<typeof companyFormSchema>;
export type InfluencerFormValues = z.infer<typeof influencerFormSchema>;
