
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Agendamento from "./pages/Agendamento";
import Parcerias from "./pages/Parcerias";
import ComoChegar from "./pages/ComoChegar";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  // Create a client instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <SonnerToaster 
            position="top-right" 
            expand={true}
            richColors={true}
          />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/parcerias" element={<Parcerias />} />
            <Route path="/como-chegar" element={<ComoChegar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
