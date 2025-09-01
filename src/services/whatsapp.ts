/**
 * WhatsApp service for handling messaging functionality
 */

import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/assets/constants/contacts';
import type { EventType, PartnershipData, ReservationData } from '@/types/forms';

/**
 * WhatsApp Service Class
 * Handles all WhatsApp-related functionality
 */
export class WhatsAppService {
  private static readonly baseUrl = 'https://wa.me/';
  private static readonly phoneNumber = CONTACT_INFO.whatsapp;

  /**
   * Opens WhatsApp with a formatted message
   */
  static openChat(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${this.baseUrl}${this.phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  /**
   * Formats reservation data into WhatsApp message
   */
  static formatReservationMessage(data: ReservationData): string {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(data.dataEvento);

    const eventTypeText = this.getEventTypeText(data.tipoEvento);

    return `*NOVA RESERVA - SÍTIO NOSSO LUGAR*

*DADOS PESSOAIS*
• Nome: ${data.nome}
• Cidade: ${data.cidade}
${data.telefone ? `• Telefone: ${data.telefone}` : ''}
${data.email ? `• Email: ${data.email}` : ''}

*DETALHES DO EVENTO*
• Data: ${formattedDate}
• Tipo: ${eventTypeText}
• Quantidade de Pessoas: ${data.quantidadePessoas}
${data.quantidadeCriancas ? `• Crianças: ${data.quantidadeCriancas}` : ''}
${data.horarioInicio ? `• Horário: ${data.horarioInicio}${data.horarioFim ? ` às ${data.horarioFim}` : ''}` : ''}

${data.observacoes ? `*OBSERVAÇÕES*\n${data.observacoes}\n\n` : ''}Agradecemos seu interesse em realizar seu evento no Sítio Nosso Lugar!

Em breve entraremos em contato para confirmar os detalhes.`;
  }

  /**
   * Formats partnership data into WhatsApp message
   */
  static formatPartnershipMessage(data: PartnershipData): string {
    const isCompany = 'nomeEmpresa' in data;

    if (isCompany) {
      const companyData = data as any; // Type assertion for company data
      return `*PROPOSTA DE PARCERIA - EMPRESA*

*DADOS DA EMPRESA*
• Nome da Empresa: ${companyData.nomeEmpresa}
• CNPJ: ${companyData.cnpj}
• Responsável: ${companyData.responsavel}
• Telefone: ${companyData.telefone}
• Email: ${companyData.email}
${companyData.website ? `• Website: ${companyData.website}` : ''}
• Segmento: ${companyData.segmento}

*DESCRIÇÃO DOS SERVIÇOS*
${companyData.descricaoServicos}

*PROPOSTA DE PARCERIA*
${companyData.proposta}

*EXPECTATIVAS*
${companyData.expectativas}

Aguardamos retorno para alinharmos os detalhes da parceria.`;
    } else {
      const influencerData = data as any; // Type assertion for influencer data
      return `*PROPOSTA DE PARCERIA - INFLUENCIADOR*

*DADOS PESSOAIS*
• Nome: ${influencerData.nome}
${influencerData.nomeArtistico ? `• Nome Artístico: ${influencerData.nomeArtistico}` : ''}
• Telefone: ${influencerData.telefone}
• Email: ${influencerData.email}
• Instagram: ${influencerData.instagram}
• Seguidores: ${influencerData.seguidores.toLocaleString('pt-BR')}
• Nicho: ${influencerData.nicho}

*DESCRIÇÃO DO CONTEÚDO*
${influencerData.descricaoConteudo}

*PROPOSTA DE PARCERIA*
${influencerData.proposta}

*EXPECTATIVAS*
${influencerData.expectativas}

Aguardamos retorno para alinharmos os detalhes da parceria.`;
    }
  }

  /**
   * Gets event type text in Portuguese
   */
  private static getEventTypeText(eventType: EventType): string {
    const eventTypes: Record<EventType, string> = {
      casamento: 'Casamento',
      aniversario: 'Aniversário',
      confraternizacao: 'Confraternização',
      'evento-corporativo': 'Evento Corporativo',
      'ensaio-fotografico': 'Ensaio Fotográfico',
      outros: 'Outros',
    };

    return eventTypes[eventType] || eventType;
  }

  /**
   * Sends a general inquiry message
   */
  static sendGeneralInquiry(message?: string): void {
    const finalMessage = message || WHATSAPP_MESSAGES.general;
    this.openChat(finalMessage);
  }

  /**
   * Sends a reservation inquiry
   */
  static sendReservationInquiry(data: ReservationData): void {
    const message = this.formatReservationMessage(data);
    this.openChat(message);
  }

  /**
   * Sends a partnership inquiry
   */
  static sendPartnershipInquiry(data: PartnershipData): void {
    const message = this.formatPartnershipMessage(data);
    this.openChat(message);
  }
}
