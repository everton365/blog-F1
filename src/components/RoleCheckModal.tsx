import {  useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/components/ui/use-toast";





const RoleCheckModal = () => {
  const adminPasswordAlt = import.meta.env.VITE_ADMIN_PASSWORD;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD_ALT;
 
  const [open, setOpen] = useState(true);
  const [password, setPassword] = useState("");
  const { setRole } = useUser();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (password === adminPasswordAlt|| password === adminPassword) {
      setRole("admin");
      toast({
        title: "Bem-vindo, Administrador!",
        description: "Você agora tem acesso às funcionalidades de administrador.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Senha incorreta",
        description: "Você será redirecionado como leitor.",
      });
      setRole("reader");
    }
    setOpen(false);
  };

  const handleReaderAccess = () => {
    setRole("reader");
    setOpen(false);
    toast({
      title: "Bem-vindo!",
      description: "Você está acessando como leitor.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bem-vindo ao Blog F1 Insights</DialogTitle>
          <DialogDescription>
            Por favor, identifique-se para continuar.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Se você é um administrador, insira a senha abaixo.
              Caso contrário, clique em "Acessar como Leitor".
            </p>
            <Input
              type="password"
              placeholder="Senha de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleReaderAccess}>
              Acessar como Leitor
            </Button>
            <Button onClick={handleSubmit}>
              Verificar Senha
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleCheckModal;