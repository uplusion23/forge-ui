import { FontItalicIcon } from "@radix-ui/react-icons";

import { Toggle } from "@/registry/austin/ui/toggle";

export default function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  );
}
