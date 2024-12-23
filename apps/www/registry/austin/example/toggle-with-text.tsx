import { FontItalicIcon } from "@radix-ui/react-icons";

import { Toggle } from "@/registry/austin/ui/toggle";

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  );
}
