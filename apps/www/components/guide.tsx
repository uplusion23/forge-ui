"use client";

import { Check, X } from "@phosphor-icons/react";

function Guide({ children }: { children: React.ReactNode[] }) {
  return <div className="mt-10 flex items-center gap-4">{children}</div>;
}

export function GuideDo() {
  return (
    <Guide>
      <Check className="size-8 rounded-full border bg-green-600 p-2 text-zinc-50 dark:bg-green-500/50" />
      <span className="font-mono text-sm font-bold uppercase text-muted-foreground">Do</span>
    </Guide>
  );
}

export function GuideDont() {
  return (
    <Guide>
      <X className="size-8 rounded-full border bg-destructive p-2 text-destructive-foreground" />
      <span className="font-mono text-sm font-bold uppercase text-muted-foreground">
        Don&apos;t
      </span>
    </Guide>
  );
}

export function GuideOkay() {
  return (
    <Guide>
      <Check className="size-8 rounded-full border bg-orange-400/70 p-2 text-zinc-50 dark:bg-yellow-400/70" />
      <span className="font-mono text-sm font-bold uppercase text-muted-foreground">Okay</span>
    </Guide>
  );
}
