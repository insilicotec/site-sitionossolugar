
import { useState } from "react";
import { Building2, Instagram } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyForm } from "./partnership/CompanyForm";
import { InfluencerForm } from "./partnership/InfluencerForm";

export function PartnershipForm() {
  const [activeTab, setActiveTab] = useState("company");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-xl">
      <Tabs defaultValue="company" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="company" className="text-center py-3">
            <Building2 className="w-4 h-4 mr-2" />
            Empresas
          </TabsTrigger>
          <TabsTrigger value="influencer" className="text-center py-3">
            <Instagram className="w-4 h-4 mr-2" />
            Influenciadores
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-6">
          <CompanyForm />
        </TabsContent>
        
        <TabsContent value="influencer" className="mt-6">
          <InfluencerForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
