
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from '@/components/ui/form';
import { ReservationData, formSchema } from './reservation/types';
import PersonalInfoFields from './reservation/PersonalInfoFields';
import EventDetailsFields from './reservation/EventDetailsFields';
import ServiceOptionsFields from './reservation/ServiceOptionsFields';
import AdditionalNotesField from './reservation/AdditionalNotesField';
import SubmitButton from './reservation/SubmitButton';
import { useEffect } from "react";

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  // Initialize react-hook-form with zod resolver
  const form = useForm<ReservationData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
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

  // Add debugging for form values
  useEffect(() => {
    const subscription = form.watch((value) => {
      console.log("Form values updated:", value);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  // Handle form submission
  const handleSubmit = (data: ReservationData) => {
    console.log("Form data submitted:", data);
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(handleSubmit)} 
        className="space-y-6"
      >
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
