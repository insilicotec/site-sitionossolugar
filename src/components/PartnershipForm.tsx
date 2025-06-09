
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
    <div className="w-full max-w-3xl mx-auto p-2 sm:p-4 md:p-6 bg-white rounded-xl">
      <Tabs defaultValue="company" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-6 bg-gray-100 p-1 rounded-lg gap-1 sm:gap-0">
          <TabsTrigger 
            value="company" 
            className="text-center py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 data-[state=active]:border-amber-300 data-[state=active]:shadow-sm transition-all duration-200"
          >
            <Plane className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Agências de viagem/turismo</span>
            <span className="sm:hidden">Agências</span>
          </TabsTrigger>
          <TabsTrigger 
            value="influencer" 
            className="text-center py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 data-[state=active]:border-purple-300 data-[state=active]:shadow-sm transition-all duration-200"
          >
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Influenciadores</span>
            <span className="sm:hidden">Influenciadores</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-4 sm:mt-6 min-h-[600px] overflow-visible">
          <CompanyForm />
        </TabsContent>
        
        <TabsContent value="influencer" className="mt-4 sm:mt-6 min-h-[600px] overflow-visible">
          <InfluencerForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
