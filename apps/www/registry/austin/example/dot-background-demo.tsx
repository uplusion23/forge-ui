import { Card } from "@/registry/austin/ui/card";
import { DotBackground } from "@/registry/austin/ui/dot-background";

export default function DotBackgroundDemo() {
  return (
    <Card className="relative flex h-2/3 w-2/3 items-center justify-center py-10">
      <DotBackground width={20} height={20} cx={1} cy={1} cr={1} className="h-full w-full" />
      <span className="text-xl">Dot Pattern</span>
    </Card>
  );
}
