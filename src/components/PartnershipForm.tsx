
import { useState } from "react";
import { Plane, Instagram } from "lucide-react";
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
      <Tabs defaultValue="company" value={activeTab} onValueChange={handleTabChange}>        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 p-1 rounded-lg">          <TabsTrigger 
            value="company" 
            className="text-center py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 data-[state=active]:border-amber-300 data-[state=active]:shadow-sm transition-all duration-200"
          >
            <Plane className="w-4 h-4 mr-2" />
            Agências de viagem/turismo
          </TabsTrigger>
          <TabsTrigger 
            value="influencer" 
            className="text-center py-3 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 data-[state=active]:border-purple-300 data-[state=active]:shadow-sm transition-all duration-200"
          >
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
