
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from '@/components/ui/form';
import { ReservationData, formSchema } from './reservation/types';
import PersonalInfoFields from './reservation/PersonalInfoFields';
import EventDetailsFields from './reservation/EventDetailsFields';
import ServiceOptionsFields from './reservation/ServiceOptionsFields';
import AdditionalNotesField from './reservation/AdditionalNotesField';
import SubmitButton from './reservation/SubmitButton';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  // Initialize react-hook-form with zod resolver
  const form = useForm<ReservationData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      cidade: '',
      dataEvento: undefined,
      tipoEvento: '',
      apenasLocal: false,
      incluiComida: false,
      buffet: false,
      dj: false,
      decoracao: false,
      observacoes: '',
    }
  });

  // Handle form submission
  const handleSubmit = (data: ReservationData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <PersonalInfoFields form={form} />
        <EventDetailsFields form={form} />
        <ServiceOptionsFields form={form} />
        <AdditionalNotesField form={form} />
        <SubmitButton />
      </form>
    </Form>
  );
};

export default ReservationForm;
