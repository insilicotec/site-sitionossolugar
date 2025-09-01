/**
 * Form-related type definitions
 */


// Base form types
export interface FormFieldError {
  field: string;
  message: string;
}

export interface FormState<T = any> {
  data: T;
  errors: FormFieldError[];
  isSubmitting: boolean;
  isValid: boolean;
}

// Reservation form types
export interface PersonalInfo {
  nome: string;
  cidade: string;
  telefone?: string;
  email?: string;
}

export interface EventDetails {
  dataEvento: Date;
  tipoEvento: EventType;
  horarioInicio?: string;
  horarioFim?: string;
  descricaoEvento?: string;
}

export interface GuestInfo {
  quantidadePessoas: number;
  quantidadeCriancas?: number;
  necessidadeEspecial?: string;
}

export interface ReservationData extends PersonalInfo, EventDetails, GuestInfo {
  observacoes?: string;
  termos: boolean;
}

// Event types
export type EventType =
  | 'casamento'
  | 'aniversario'
  | 'confraternizacao'
  | 'evento-corporativo'
  | 'ensaio-fotografico'
  | 'outros';

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  casamento: 'Casamento',
  aniversario: 'Aniversário',
  confraternizacao: 'Confraternização',
  'evento-corporativo': 'Evento Corporativo',
  'ensaio-fotografico': 'Ensaio Fotográfico',
  outros: 'Outros',
};

// Partnership form types
export interface CompanyInfo {
  nomeEmpresa: string;
  cnpj: string;
  responsavel: string;
  telefone: string;
  email: string;
  website?: string;
  segmento: string;
  descricaoServicos: string;
}

export interface InfluencerInfo {
  nome: string;
  nomeArtistico?: string;
  telefone: string;
  email: string;
  instagram: string;
  seguidores: number;
  nicho: string;
  descricaoConteudo: string;
}

export interface PartnershipProposal {
  tipoParceria: 'empresa' | 'influencer';
  proposta: string;
  expectativas: string;
  disponibilidade: string;
}

export type CompanyPartnershipData = CompanyInfo & PartnershipProposal;
export type InfluencerPartnershipData = InfluencerInfo & PartnershipProposal;
export type PartnershipData = CompanyPartnershipData | InfluencerPartnershipData;

// Form step configuration
export interface FormStep {
  id: number;
  title: string;
  description: string;
  fields: string[];
  optional?: boolean;
}

// Multi-step form state
export interface StepperFormState<T = any> {
  currentStep: number;
  completedSteps: number[];
  formData: Partial<T>;
  stepErrors: Record<number, FormFieldError[]>;
  canProceed: boolean;
}
