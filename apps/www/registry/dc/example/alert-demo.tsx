import { RocketLaunch } from "@phosphor-icons/react";

import { Alert, AlertDescription, AlertTitle } from "@/registry/dc/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <RocketLaunch className="h-5 w-5" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}
