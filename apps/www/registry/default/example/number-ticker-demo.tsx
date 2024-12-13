"use client";

import { NumberTicker } from "@/registry/default/ui/number-ticker";

export default function NumberTickerDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <NumberTicker value={100} />
      </div>
    </div>
  );
}
