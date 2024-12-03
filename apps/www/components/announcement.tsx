import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { AlertTriangleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Separator } from "@/registry/austin/ui/separator"

interface AnnouncementProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export function Announcement({ className, ...props }: AnnouncementProps) {
  return (
    <Link
      href="/beta"
      className={cn(
        "group inline-flex items-center rounded-full border py-0.5 pl-2 pr-4 text-xs font-medium md:text-sm",
        className
      )}
      {...props}
    >
      <AlertTriangleIcon className="hidden h-4 w-4 md:block" />{" "}
      <Separator className="mx-2 hidden h-4 md:block" orientation="vertical" />{" "}
      <span className="underline-offset-4 group-hover:underline">
        This product is in beta.
      </span>
      <span className="ml-2 flex items-center gap-2 text-primary underline-offset-4 group-hover:underline">
        Learn more
        <ArrowRightIcon className="h-4 w-4" />
      </span>
    </Link>
  )
}
