import { useId } from "react"

import { cn } from "@/lib/utils"

interface DotBackgroundProps
  extends Omit<
    React.SVGProps<SVGSVGElement>,
    | "width"
    | "height"
    | "x"
    | "y"
    | "cx"
    | "cy"
    | "cr"
    | "className"
    | "ref"
    | "key"
  > {
  width?: string | number
  height?: string | number
  x?: string | number
  y?: string | number
  cx?: string | number
  cy?: string | number
  cr?: string | number
  className?: string
}

function DotBackground({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotBackgroundProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full fill-muted/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export { DotBackground }
