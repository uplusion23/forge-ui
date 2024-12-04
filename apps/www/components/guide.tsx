"use client"

import { Check, X } from "@phosphor-icons/react"

function Guide({ children }: { children: React.ReactNode[] }) {
  return <div className="mt-2 flex flex-col items-center gap-2">{children}</div>
}

export function GuideDo() {
  return (
    <Guide>
      <Check className="h-8 w-8 rounded-full border bg-green-500/20 p-2" />
      <span className="font-mono text-sm uppercase text-muted-foreground">
        Do
      </span>
    </Guide>
  )
}

export function GuideDont() {
  return (
    <Guide>
      <X className="h-8 w-8 rounded-full border bg-destructive/40 p-2" />
      <span className="font-mono text-sm uppercase text-muted-foreground">
        Don&apos;t
      </span>
    </Guide>
  )
}
