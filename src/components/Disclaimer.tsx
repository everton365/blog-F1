import { Alert, AlertDescription } from "./ui/alert";

const Disclaimer = () => {
  return (
    <Alert className="mt-12 bg-muted">
      <AlertDescription className="text-center">
      Blog de notícias, onde compartilhamos conteúdos atualizados sobre tecnologia, inovação e eventos que moldam o futuro. Oferecemos análises, tendências e insights com uma abordagem pessoal e direta.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;