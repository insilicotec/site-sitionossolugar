/**
 * Form validation schemas using Zod
 * Centralized validation logic for all forms
 */

import { z } from 'zod';

// Common validation rules
const phoneRegex = /^(\+55)?\s?\(?[1-9]{2}\)?\s?[9]?[0-9]{4}-?[0-9]{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

// Personal info validation
export const personalInfoSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),

  cidade: z
    .string()
    .min(2, 'Cidade deve ter pelo menos 2 caracteres')
    .max(50, 'Cidade deve ter no máximo 50 caracteres'),

  telefone: z.string().regex(phoneRegex, 'Formato de telefone inválido').optional(),

  email: z.string().regex(emailRegex, 'Email inválido').optional(),
});

// Event details validation
export const eventDetailsSchema = z.object({
  dataEvento: z
    .date({
      required_error: 'Data do evento é obrigatória',
      invalid_type_error: 'Data inválida',
    })
    .refine(date => date > new Date(), {
      message: 'Data deve ser futura',
    }),

  tipoEvento: z.enum(
    [
      'casamento',
      'aniversario',
      'confraternizacao',
      'evento-corporativo',
      'ensaio-fotografico',
      'outros',
    ] as const,
    {
      required_error: 'Tipo de evento é obrigatório',
    }
  ),

  horarioInicio: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de horário inválido (HH:MM)')
    .optional(),

  horarioFim: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de horário inválido (HH:MM)')
    .optional(),

  descricaoEvento: z.string().max(500, 'Descrição deve ter no máximo 500 caracteres').optional(),
});

// Guest info validation
export const guestInfoSchema = z.object({
  quantidadePessoas: z
    .number({
      required_error: 'Quantidade de pessoas é obrigatória',
      invalid_type_error: 'Deve ser um número válido',
    })
    .min(1, 'Deve ter pelo menos 1 pessoa')
    .max(500, 'Máximo de 500 pessoas'),

  quantidadeCriancas: z.number().min(0, 'Quantidade de crianças não pode ser negativa').optional(),

  necessidadeEspecial: z
    .string()
    .max(200, 'Descrição deve ter no máximo 200 caracteres')
    .optional(),
});

// Complete reservation form validation
export const reservationFormSchema = z.object({
  ...personalInfoSchema.shape,
  ...eventDetailsSchema.shape,
  ...guestInfoSchema.shape,
  observacoes: z.string().max(1000, 'Observações devem ter no máximo 1000 caracteres').optional(),
  termos: z.boolean().refine(val => val === true, {
    message: 'É necessário aceitar os termos de uso',
  }),
});

// Company partnership validation
export const companyPartnershipSchema = z.object({
  nomeEmpresa: z
    .string()
    .min(2, 'Nome da empresa deve ter pelo menos 2 caracteres')
    .max(100, 'Nome da empresa deve ter no máximo 100 caracteres'),

  cnpj: z.string().regex(cnpjRegex, 'CNPJ deve estar no formato XX.XXX.XXX/XXXX-XX'),

  responsavel: z
    .string()
    .min(2, 'Nome do responsável deve ter pelo menos 2 caracteres')
    .max(50, 'Nome do responsável deve ter no máximo 50 caracteres'),

  telefone: z.string().regex(phoneRegex, 'Formato de telefone inválido'),

  email: z.string().regex(emailRegex, 'Email inválido'),

  website: z.string().url('URL inválida').optional(),

  segmento: z
    .string()
    .min(2, 'Segmento deve ter pelo menos 2 caracteres')
    .max(50, 'Segmento deve ter no máximo 50 caracteres'),

  descricaoServicos: z
    .string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres'),

  tipoParceria: z.literal('empresa'),

  proposta: z
    .string()
    .min(10, 'Proposta deve ter pelo menos 10 caracteres')
    .max(1000, 'Proposta deve ter no máximo 1000 caracteres'),

  expectativas: z
    .string()
    .min(10, 'Expectativas devem ter pelo menos 10 caracteres')
    .max(500, 'Expectativas devem ter no máximo 500 caracteres'),

  disponibilidade: z
    .string()
    .min(5, 'Disponibilidade deve ter pelo menos 5 caracteres')
    .max(200, 'Disponibilidade deve ter no máximo 200 caracteres'),
});

// Influencer partnership validation
export const influencerPartnershipSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),

  nomeArtistico: z.string().max(50, 'Nome artístico deve ter no máximo 50 caracteres').optional(),

  telefone: z.string().regex(phoneRegex, 'Formato de telefone inválido'),

  email: z.string().regex(emailRegex, 'Email inválido'),

  instagram: z.string().regex(/^@?[a-zA-Z0-9._]+$/, 'Handle do Instagram inválido'),

  seguidores: z
    .number({
      required_error: 'Número de seguidores é obrigatório',
      invalid_type_error: 'Deve ser um número válido',
    })
    .min(1000, 'Mínimo de 1.000 seguidores')
    .max(10000000, 'Máximo de 10 milhões de seguidores'),

  nicho: z
    .string()
    .min(2, 'Nicho deve ter pelo menos 2 caracteres')
    .max(50, 'Nicho deve ter no máximo 50 caracteres'),

  descricaoConteudo: z
    .string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres'),

  tipoParceria: z.literal('influencer'),

  proposta: z
    .string()
    .min(10, 'Proposta deve ter pelo menos 10 caracteres')
    .max(1000, 'Proposta deve ter no máximo 1000 caracteres'),

  expectativas: z
    .string()
    .min(10, 'Expectativas devem ter pelo menos 10 caracteres')
    .max(500, 'Expectativas devem ter no máximo 500 caracteres'),

  disponibilidade: z
    .string()
    .min(5, 'Disponibilidade deve ter pelo menos 5 caracteres')
    .max(200, 'Disponibilidade deve ter no máximo 200 caracteres'),
});

// Contact form validation
export const contactFormSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),

  email: z.string().regex(emailRegex, 'Email inválido'),

  telefone: z.string().regex(phoneRegex, 'Formato de telefone inválido').optional(),

  assunto: z
    .string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(100, 'Assunto deve ter no máximo 100 caracteres'),

  mensagem: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres'),
});

// Export types inferred from schemas
export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type EventDetailsFormData = z.infer<typeof eventDetailsSchema>;
export type GuestInfoFormData = z.infer<typeof guestInfoSchema>;
export type ReservationFormData = z.infer<typeof reservationFormSchema>;
export type CompanyPartnershipFormData = z.infer<typeof companyPartnershipSchema>;
export type InfluencerPartnershipFormData = z.infer<typeof influencerPartnershipSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
