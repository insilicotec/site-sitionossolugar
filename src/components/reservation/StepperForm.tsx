import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { ReservationData, formSchema } from './types';
import StepPersonalInfo from './steps/StepPersonalInfo.tsx';
import StepEventDetails from './steps/StepEventDetails.tsx';
import StepGuestCount from './steps/StepGuestCount.tsx';
import StepAdditionalNotes from './steps/StepAdditionalNotes.tsx';

interface StepperFormProps {
  onSubmit: (data: ReservationData) => void;
}

const STEPS = [
  { id: 1, title: 'Dados Pessoais', description: 'Suas informações básicas' },
  { id: 2, title: 'Detalhes do Evento', description: 'Data e tipo do evento' },
  { id: 3, title: 'Quantidade de Pessoas', description: 'Número de convidados' },
  { id: 4, title: 'Observações', description: 'Informações adicionais' },
];

const StepperForm = ({ onSubmit }: StepperFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<ReservationData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      nome: '',
      cidade: '',
      dataEvento: undefined,
      tipoEvento: '',
      quantidadePessoas: undefined,
      observacoes: '',
    }
  });

  const { trigger, formState: { errors } } = form;

  // Validation for each step
  const validateStep = async (step: number): Promise<boolean> => {
    switch (step) {
      case 1:
        return await trigger(['nome', 'cidade']);
      case 2:
        return await trigger(['dataEvento', 'tipoEvento']);
      case 3:
        return await trigger(['quantidadePessoas']);
      case 4:
        return true; // observacoes is optional
      default:
        return true;
    }
  };
  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFormSubmit = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      const data = form.getValues();
      handleSubmit(data);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (data: ReservationData) => {
    onSubmit(data);
  };  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepPersonalInfo form={form} />;
      case 2:
        return <StepEventDetails form={form} />;
      case 3:
        return <StepGuestCount form={form} />;
      case 4:
        return <StepAdditionalNotes form={form} />;
      default:
        return null;
    }
  };

  const isStepComplete = (stepNumber: number): boolean => {
    const formValues = form.getValues();
    switch (stepNumber) {
      case 1:
        return !!(formValues.nome && formValues.cidade);
      case 2:
        return !!(formValues.dataEvento && formValues.tipoEvento);
      case 3:
        return !!(formValues.quantidadePessoas);
      case 4:
        return true; // observacoes is optional
      default:
        return false;
    }  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Form Content */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[400px]">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Voltar
            </Button>            <div className="flex gap-3">
              {currentStep < STEPS.length ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2 px-8"
                >
                  Próximo
                  <ChevronRight size={16} />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleFormSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-8"
                >
                  <Check size={16} />
                  Continuar
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepperForm;
