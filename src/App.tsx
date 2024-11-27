import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { UserProvider } from "./contexts/UserContext";
import RoleCheckModal from "./components/RoleCheckModal";
import BlogPostPage from "./pages/post";
import UltimasPostagens from "./pages/ultimasPostagens";
import Sobre from "./pages/sobre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RoleCheckModal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Blog-posts/:id" element={<BlogPostPage/>} />
            <Route path="/UltimasPostagens" element={<UltimasPostagens />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;