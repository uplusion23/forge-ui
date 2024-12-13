"use client";

import * as React from "react";
import { XIcon } from "lucide-react";

import { cn, cva, type VariantProps } from "@/lib/utils";
import { Button } from "@/registry/austin/ui/button";

const bannerVariants = cva(
  "sticky flex min-h-4 w-full items-center justify-center py-1 font-mono text-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        ghost: "bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PageBannerProps
  extends React.InputHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  dismissable?: boolean;
  animateDismiss?: boolean;
  alwaysOnTop?: boolean;
}

const PageBanner = ({
  className,
  variant,
  children,
  dismissable,
  animateDismiss = true,
  alwaysOnTop,
  ...props
}: PageBannerProps) => {
  const [dismissed, setDismissed] = React.useState(false);
  const [dismissing, setDismissing] = React.useState(false);

  const dismiss = () => {
    setDismissing(true);
    setTimeout(() => {
      setDismissed(true);
    }, 1000);
  };

  return (
    <div
      className={cn(
        bannerVariants({ variant }),
        className,
        dismissing && "h-0 min-h-0 overflow-hidden py-0",
        dismissed && "hidden",
        alwaysOnTop && "sticky top-0 z-[999]",
      )}
      {...props}
    >
      {children}
      {dismissable && (
        <Button variant="ghost" className="absolute right-4 size-5 p-0" onClick={() => dismiss()}>
          <XIcon className="size-4 text-current" />
        </Button>
      )}
    </div>
  );
};

export { PageBanner };
