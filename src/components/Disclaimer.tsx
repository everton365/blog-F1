import { Alert, AlertDescription } from "./ui/alert";

const Disclaimer = () => {
  return (
    <Alert className="mt-12 bg-muted">
      <AlertDescription className="text-center">
        This blog is an independent publication and is not affiliated with, endorsed by, or connected to
        Formula 1, Formula One World Championship Limited, Formula One Management, Formula One
        Administration, or any other subsidiary or affiliate of Formula One Group.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;