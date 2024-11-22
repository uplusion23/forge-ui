import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

const componentStatus: {
  [key: string]: boolean
} = {
  accordion: true,
  "alert-dialog": true,
  alert: true,
  "aspect-ratio": true,
  avatar: true,
  badge: true,
  breadcrumb: true,
  button: true,
  calendar: true,
  card: true,
  carousel: true,
  checkbox: true,
  collapsible: true,
  command: true,
  "context-menu": true,
  dialog: true,
  drawer: true,
  "dropdown-menu": true,
  "hover-card": true,
  "input-otp": true,
  input: true,
  label: true,
}

export default function BetaPage() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-mono text-sm">Component status</h3>
      <div className="grid scroll-mt-20 grid-cols-3 gap-8 lg:grid-cols-5">
        {Object.keys(componentStatus).map((component) => (
          <Tooltip key={component}>
            <TooltipTrigger className="mr-auto">
              <div className="flex flex-row gap-2" key={component}>
                <span
                  className={cn(
                    "capitalize",
                    componentStatus[component]
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {component}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {componentStatus[component] ? (
                "Available"
              ) : (
                <span className="text-muted-foreground">Unverified</span>
              )}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
