"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedLogoProps extends React.SVGProps<SVGSVGElement> {}

const AnimatedLogo = (props: AnimatedLogoProps) => {
  return (
    <svg
      viewBox="0 0 154 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-24 w-16 text-primary", props.className)}
      {...props}
    >
      <motion.path
        d="M38.7236 115.053L0.5 95.941V58.059L38.7236 38.9472L77.2236 19.6972L115.5 0.559019L153.5 19.559V57.441L115.276 76.5528L114.382 77L115.276 77.4472L153.5 96.559V134.441L115.276 153.553L76.7764 172.803L76.5 172.941V173.25V211.441L38.5 230.441L0.5 211.441V173.25V135.059L38.7236 115.947L39.618 115.5L38.7236 115.053Z"
        stroke="currentColor"
        fill="currentColor"
        initial={{
          strokeDashoffset: 747.587,
          strokeDasharray: 747.587,
          fillOpacity: 0,
        }}
        animate={{
          strokeDashoffset: 0,
          fillOpacity: 1,
        }}
        transition={{
          strokeDashoffset: {
            duration: 1,
            ease: [0.47, 0, 0.745, 0.715],
          },
          fillOpacity: {
            duration: 0.7,
            ease: [0.47, 0, 0.745, 0.715],
            delay: 0.8,
          },
        }}
      />
    </svg>
  )
}

export { AnimatedLogo }
