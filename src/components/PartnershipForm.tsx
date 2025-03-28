
import { useState } from "react";
import { Building2, Instagram } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyForm } from "./partnership/CompanyForm";
import { InfluencerForm } from "./partnership/InfluencerForm";

export function PartnershipForm() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-xl">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
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
        
        <TabsContent value="company">
          <CompanyForm />
        </TabsContent>
        
        <TabsContent value="influencer">
          <InfluencerForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
