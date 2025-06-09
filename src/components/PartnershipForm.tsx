
import { useState } from "react";
import { Plane, Instagram, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CompanyForm } from "./partnership/CompanyForm";
import { InfluencerForm } from "./partnership/InfluencerForm";

type PartnershipType = "company" | "influencer" | null;

export function PartnershipForm() {
  const [selectedType, setSelectedType] = useState<PartnershipType>(null);

  const handleBackToSelection = () => {
    setSelectedType(null);
  };

  // Tela de seleção inicial
  if (selectedType === null) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Escolha o tipo de parceria
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Selecione a opção que melhor descreve seu perfil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Opção Agências */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-amber-300"
            onClick={() => setSelectedType("company")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Agências
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Para agências de viagem e turismo que desejam oferecer experiências únicas
              </p>
              <div className="text-xs text-amber-600 font-medium">
                Clique para continuar →
              </div>
            </CardContent>
          </Card>

          {/* Opção Influenciadores */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-purple-300"
            onClick={() => setSelectedType("influencer")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Influenciadores
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Para criadores de conteúdo e influenciadores digitais
              </p>
              <div className="text-xs text-purple-600 font-medium">
                Clique para continuar →
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Tela do formulário
  return (
    <div className="w-full max-w-3xl mx-auto p-2 sm:p-4 md:p-6">
      {/* Botão de voltar */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={handleBackToSelection}
          className="text-gray-600 hover:text-gray-900 p-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar à seleção
        </Button>
      </div>

      {/* Título do formulário */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          {selectedType === "company" ? (
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
              <Plane className="w-6 h-6 text-amber-600" />
            </div>
          ) : (
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
              <Instagram className="w-6 h-6 text-purple-600" />
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {selectedType === "company" ? "Parceria para Agências" : "Parceria para Influenciadores"}
          </h2>
        </div>
        <p className="text-gray-600 text-sm">
          Preencha os dados abaixo para iniciarmos nossa parceria
        </p>
      </div>

      {/* Formulário */}
      <div className="bg-white rounded-xl">
        {selectedType === "company" ? <CompanyForm /> : <InfluencerForm />}
      </div>
    </div>
  );
}
