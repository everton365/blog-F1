import { Alert, AlertDescription } from "./ui/alert";

const Disclaimer = () => {
  return (
    <Alert className="mt-12 bg-muted">
      <AlertDescription className="text-center">
        Este blog é uma publicação independente e não possui vínculo, endosso ou conexão com a
        Fórmula 1, Formula One World Championship Limited, Formula One Management, Formula One
        Administration, ou qualquer outra subsidiária ou afiliada do Grupo Formula One.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;