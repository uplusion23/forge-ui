"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { useTheme } from "next-themes"

import { Button } from "@/registry/austin/ui/button"

const iconAimations: HTMLMotionProps<"div"> = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
  },
  transition: {
    duration: 0.1,
  },
}

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark")
    } else {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
  }

  return (
    <Button
      variant="ghost"
      className="size-8 px-0"
      onClick={() => toggleTheme()}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === "light" ? (
          <motion.div key="light-icon" {...iconAimations}>
            <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </motion.div>
        ) : (
          <motion.div key="dark-icon" {...iconAimations}>
            <MoonIcon className="size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
